import {NAVO, NAVC} from './actionTypes';

export const Initialstate = {
	nav : 'menu'
}

export default function rootReducer (state = Initialstate, action) {
	switch(action.type) {
		case NAVO: return {
			nav: action.payload
		}
		case NAVC: return {
			nav: action.payload
		}
		default: return state
	}
}