import React from 'react';
//parte de proptypes
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
//importar desde las constantes segunda parte
import {CLOUD,
	CLOUDY,
	SUN,
	RAIN,
	SNOW,
	WINDY,
	DRIZZLE,
	THUNDER
} from './../../../constant/weathers'

//primera parte antes de exportarlas del otro lado
const StateToIconName = weatherState => {
	switch (weatherState) {
		case CLOUD:
			return 'cloud';
        case CLOUDY:
			return 'cloudy';
		case SUN:
			return 'day-sunny';
		case RAIN:
			return 'rain';
		case SNOW:
			return 'snow';
		case WINDY:
			return 'windy';
		case THUNDER:
			return 'day-thunderstorm';
		case DRIZZLE:
			return 'day-showers';
		default:
			return 'day-sunny';
	}

};

const getWeatherIcon = (weatherState) => {
	return (<WeatherIcons name={StateToIconName(weatherState)} size='2x' />)
};

const WeatherTemperature = ({ temperature, weatherState }) => (

		<div>
			{getWeatherIcon(weatherState)}
			
			<span>{`${temperature} °C`}</span>
		</div>
	);

//proptypes esto lo hicimos despues de las constantes :P

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;
