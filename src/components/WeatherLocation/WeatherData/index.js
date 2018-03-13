import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
//estilos
import './styles.css';

// dia 3
const WeatherData = ({ data }) => {
const { temperature, weatherState, humidity, wind } = data;	
	return(

	<div className='weatherDataCont'>
		<WeatherTemperature temperature ={temperature} weatherState={weatherState} />
		<WeatherExtraInfo humidity = {humidity} wind={wind} />
		

	</div>
	);
};

WeatherData.propTypes = {
	//shape nos indica un objeto con la forma indicada
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.string.isRequired,
	}),
};




export default 	WeatherData;