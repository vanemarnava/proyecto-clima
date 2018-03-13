// componente que realmente se esta comunicando con el estado
import React, {Component} from 'react';
// connet conecta con el estado, recibe dos funciones...
// llamar al metodo entre {}
// funcion que recibe por parametro 2 funciones, una para disparar las acciones
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

	handleSelectionLocation = (city) => {
    // this.setState({ city });
    // console.log(`hadlerSelectionLocation ${city}`);
    this.props.setCity(city);
 	}
    
    render() {
    	return(
	    	<div>
			    <LocationList cities = { this.props.cities } 
			    	onSelectedLocation = { this.handleSelectionLocation}>
			    </LocationList>
			  </div>
		  )
	  }

  }

  // esta funcion nos deja trabajar con las acciones
	const mapDispatchToPropsActions = (dispatch) => ({
	    setCity: value => dispatch(setCity(value))
	});


export default connect(null, mapDispatchToPropsActions)(LocationListContainer);