import React, {Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import {open, close} from '../action';
import {Initialstate} from '../redux';

class Menu extends Component {
	constructor () {
		super();
		this.state = {
			VarButt: 'butt'
		// 	VarNav: Initialstate.nav
		}
	}
	// Hand () {
	// 	this.setState({VarNav: 'menu_active'});
	// }
	// Nav () {
	// 	this.setState({VarNav: 'menu'});
	// }
	render () {
       	function home(event) {
       		 //const second = document.getElementById('second');
       		 //console.log(second)
       		 //document.location.href = second;
       		 var second = document.querySelector('.main');
       		 var quiz = document.querySelector('.quiz');
       		 var all = document.querySelector('.All');
       		 var menu = document.querySelector('.probir');
       		 quiz.style.display = 'none';
       		 menu.style.display = 'none';
       		 second.classList.toggle('main_active');
       		 event.preventDefault();
       	}
       	function first (event) {
       		var first = document.querySelector('.mainer');
       		var quiz = document.querySelector('.quiz');
       		var menu = document.querySelector('.probir');
       		quiz.style.display = 'none';
       		menu.style.display = 'none';
       		//first.style.display = 'block';
       		first.classList.toggle('mainer_active');
       		event.preventDefault();
       	}
		return (
			<div className="probir">
			<nav className={Initialstate.nav} onClick={this.props.Hand.bind(this)}>
			<a onClick={first} href="#">first part<br></br>(Об авторе)</a>
			<a onClick={home} href="#">second part<br></br>(Ваши персоналии)</a>
			</nav>
			<button onClick={this.props.Nav.bind(this)} className={this.state.VarButt}>Menu</button>
			{this.props.children}
			</div>

		);
	}
}
	function MaxState (state) {
		return {
			nav: state.nav
		}
	} 
	function MaxDis (dispatch) {
		return {
			Nav: () => dispatch(open()),
			Hand: () => dispatch(close())
		}
	}

export default connect(MaxState, MaxDis)(Menu)