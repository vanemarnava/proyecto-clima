import React, { Component }from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const api_key = "4bbc79d643a02a6be0ad351da760bc44";
const url = "http://api.openweathermap.org/data/2.5/weather"


class WeatherLocation extends Component {

	constructor ({ city }) {
		super();
		this.state = {
			city,
			data: null
		}


		console.log('constructor')
	}

	
componentWillMount() {
const { city } = this.state
const api_weather= `${url}?q=${city}&appid=${api_key}&units=metric`;
	fetch(api_weather).then(data => {
	
		return data.json();
	}).then( weather_data => {
		
		const data = transformWeather(weather_data);
		
		this.setState({ data })
		
	});
	
}

	render = () => {
		const { onWeatherLocationClick } = this.props;
		const { city, data } = this.state;
		return (
		<div className='weatherLocationCont' onClick={onWeatherLocationClick}>
			<Location city = { city } />
			{data ? <WeatherData data={ data } /> : 
			<CircularProgress size= {60} thinckness={7} />}
		</div>
		);
	}


};
 
 WeatherLocation.propTypes = {
 	city: PropTypes.string,
 	onWeatherLocationClick: PropTypes.func,
 }

export default WeatherLocation;