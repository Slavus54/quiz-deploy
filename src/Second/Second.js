import React, {Component} from 'react';
import './Second.css';

export default class Second extends Component {
	constructor () {
		super();
		this.state = {
			classInp1: 'input',
			classInp2: 'input'
		}
	}
	Hand() {
		 this.setState({classInp1: 'input_active', classInp2: 'input_active' })
		 console.log(this.testIn.value);
	};
	render () {
		async function send() {
			var value1 = document.getElementById('first').value;
			var value2 = document.getElementById('second').value;

			var response = await fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({value1, value2})
			});

			var result = await response.json();
			alert(JSON.stringify(result));
		}
		function back(event) {
			 var second = document.querySelector('.main_active');
       		 var quiz = document.querySelector('.quiz');
       		 var all = document.querySelector('.All');
       		 var menu = document.querySelector('.probir');
       		 quiz.style.display = 'block';
       		 menu.style.display = 'block';
       		 second.style.display = 'none';
       		 event.preventDefault();
		}
		return (
			<div className="main">
			<div className="headline">Main headline</div>
			<div className="text">Some text!</div>
			<input className={this.state.classInp1} ref={(input) => this.testIn = input} id="first" placeholder="Введите ваше имя"></input>
			<input className={this.state.classInp2} id="second" placeholder="Введите вашу фамилию"></input>
			<button onClick={send} onMouseOver={this.Hand.bind(this)} className="button" id="but1">Отправить</button>
			<button onClick={back} className="button" id="but2">Назад</button>
			</div>
		);
	}
}