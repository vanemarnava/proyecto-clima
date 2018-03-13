// set_city viene de los actions
import { SET_CITY } from './../actions';

export const city = (state, action) => {
	// evaluar de que si tiene set_city action, le pasara el nuevo valor
	switch (action.type) {
		case SET_CITY:
		// tres puntos para 
			return {...state, city: action.value}
		default:
			return state;
	}
}

/*
	const state = {
		country: 'Chile'
	}

	const action = {
		value: 'Santiago'
	}
	
	... = spread propagation / operador de propagacion
	const newState = {...state, city: action.value}

 tres puntos, toma una compia y agrega una propiedad city con el action.value

 se hace console, devolvera un nuevo objeto que tendra un contry con valor chile, y 

*/