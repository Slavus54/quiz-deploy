import React, {Component} from 'react';
import './Quiz.css';
import Active from '../Active/Active';

export default class Quiz extends Component {
	constructor () {
		super();
		this.state = {

		}
	}
	async send () {
			var valu1 = this.CheckInput1.value;
			var valu2 = this.CheckInput2.value;
			var valu3 = this.CheckInput3.value;
			
			console.log(valu1)
			var olga = {
				name: 'Olga',
				surname: 'Peretyagina',
				status: 'ready to fuck'
			}
			
			var response = await fetch('https://reqres.in/api/users', {
				method: 'POST',
				headers: {'Content-Type': 'application/json;charset=utf-8'},
				body: JSON.stringify({valu1, valu2, valu3, olga})
			});
			var result = await response.json();
			var url = await response.url;
			alert(JSON.stringify(result));
			alert(url);
			alert(JSON.stringify(olga.name));
			alert(JSON.stringify(olga.status));
		}
	render() {
		function h1 () {
		
		var rightAnswer = document.getElementById('1');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			alert('You are right!');	 
		} 
		fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
		.then(response=>response.json())
		.then(commits => alert(commits[9].commit.verification.verified))
	}
		function h2 () {
		
		var rightAnswer = document.getElementById('4');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			alert('You are right!');	 
		} 
		fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
		.then(response=>response.json())
		.then(result=>alert(result[0].commit.author.name))
	}
		function h3 () {
		
		var rightAnswer = document.getElementById('7');
		console.log(rightAnswer);
		if (rightAnswer) {
			rightAnswer.style.backgroundColor = 'green';
			rightAnswer.style.color = 'white';
			alert('You are right!');	 
		} 
		const Singleton = new (function () {
			var rightAnswer = document.getElementById('7');
			const single = rightAnswer;
			return function () {
				alert(single);
			}
		})();
		Singleton();
	}
		 
		return (
			<div className="quiz">
			<h3>Добро пожаловать, {this.props.name} {this.props.val}</h3>
			<Active id1="1" id2="2" id3="3" Hand={h1} qus="1. Кто гений?" right="Евгений Понасенков" other1="Наталья Дубникова" other2="Игорь Варданян" />
			<Active id1="4" id2="5" id3="6" Hand={h2} qus="2. Кто великая и прекрасная богиня химоньки?" right="Светлана Табатчикова" other1="Оксана Батлук" other2="Наталья Дубникова" />
			<Active id1="7" id2="8" id3="9" Hand={h3} qus="3. Кто великолепнейшая дрокальщица исторки?" right="Оксана Батлук" other1="Наталья Дубникова" other2="Светлана Табатчикова" />
			<input className="place" id="place1" ref={(input) => this.CheckInput1 = input} placeholder="Введите любимую страну" required maxlength="12" ></input>
			<input className="place" id="place2" ref={(input) => this.CheckInput2 = input} placeholder="Введите вашего кумира в истории" required maxlength="24"></input>
			<input className="place" id="place3" ref={(input) => this.CheckInput3 = input} placeholder="Введите фамилию жалкого доцентишки с физиономией пьяного водопроводчика" required maxlength="7"></input>
			<button id="but1" onClick={this.send.bind(this)}>Отправить</button>
			</div>
		);
	}
}