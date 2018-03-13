import React, { Component} from 'react';
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

// en el return dentro del render no es necesario que este el contenido dentro de divs, porque se esta evaluando
class ForecastExtendedContainer extends Component {	
	render() {
		return (
			// evaluacion
			this.props.city === null ? null :  
      <ForecastExtended city = {this.props.city}></ForecastExtended> 
		)
	}
}


const mapStateProps = (state) => ({
	city: state.city
});


export default connect(mapStateProps, null)(ForecastExtendedContainer);