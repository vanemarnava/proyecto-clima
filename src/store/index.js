import { createStore } from 'redux';
import { city } from './../reducers/city';

const initialState = {
	city: 'Santiago ,scl'
}

//vincular plugin redux devtools con nuestra aplicacion 
// el city es lo que esta en el city de la carp. reducers
export const store = createStore((city, initialState) => 
	window.__REDUX_DEVTOOLS_EXTENSION__&& 
	window.__REDUX_DEVTOOLS_EXTENSION__());