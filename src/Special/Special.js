import React, {Component} from 'react';
import './Special.css';

export default class Special extends Component {
	constructor () {
		super();
		this.state = {
			//main: 'mainer',
			pClass: 'ppp',
			inputClass: 'inp',
			buttonClass: 'butt'
		}
	}
	Hand () {
		var p1 = document.querySelector('#forSpecial');
		var input = document.querySelector('#inp1');
		this.setState({inputClass: 'inp_disactive', pClass: 'ppp_active'});
		p1.innerHTML = this.CheckInput.value;
		//p1.innerHTML = input.value;		
	}
	render () {
		return (
			<div className="mainer1">
			<p id="forSpecial" className={this.state.pClass}>sss</p>
			<input id="inp1" className={this.state.inputClass} ref={(input) => this.CheckInput = input} placeholder="Введите Ваше мнение об Авторе"></input>
			<button onClick={this.Hand.bind(this)} className={this.state.buttonClass}>Отправить</button>
			</div>
		);
	}
}