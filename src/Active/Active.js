import React from 'react'; 
import './Active.css';

export default function Active (props) {

	return (
		<div className="Active">
		<p>
		<h3>{props.qus}</h3>
		<ul>
		<li onClick={props.Hand} id={props.id1}>{props.right}</li>
		<li onClick={props.Hand} id={props.id2}>{props.other1}</li>
		<li onClick={props.Hand} id={props.id3}>{props.other2}</li>
		</ul>
		</p>
		</div>
	);
}