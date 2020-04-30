import {NAVO, NAVC} from './actionTypes';
import {Initialstate} from './redux';

export function open () {
	console.log(Initialstate.nav);
	Initialstate.nav = 'menu_active'
	return {
		type: NAVO,
		payload: 'menu_active'
	}
}
export function close () {
	console.log(Initialstate.nav);
	Initialstate.nav = 'menu';
	return {
		type: NAVC,
		payload: 'menu'
	}
}