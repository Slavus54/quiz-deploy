import React, {Component} from 'react';
import './First.css';
import Special from '../Special/Special';

export default class First extends Component {
	constructor () {
		super();
		this.state = {
			main: 'mainer'
		}
	}
	back (event) {
		 var first = document.querySelector('.mainer');
		 var quiz = document.querySelector('.quiz');
         var menu = document.querySelector('.probir');
       	 quiz.style.display = 'block';
         menu.style.display = 'block';
         first.style.display = 'none';
         event.preventDefault();
	}
	render () {
		return(
			<div className={this.state.main}>
			<h2>Создатель этого приложения - {this.props.nameMe}</h2>
			<Special />
			<p>Some text</p>
			<button onClick={this.back} className="button" id="but">Назад</button>
			
			</div>
		);
	}
}