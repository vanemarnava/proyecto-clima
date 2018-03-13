import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

const api_key = "4bbc79d643a02a6be0ad351da760bc44";
const url = "http://api.openweathermap.org/data/2.5/forecast"


class ForecastExtended extends Component {

	constructor() {
		super();
		this.state = { forecastData: null }
	}


	componentDidMount() {
		this.updateCity(this.props.city);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.city !== this.props.city) {
			this.updateCity(nextProps.city);
			this.setState( {forecastData:null});
			this.updateCity(nextProps.city);
		}
	}

	updateCity = city => {
		const url_forecast = `${url}?q=${city}&appid=${api_key}&units=metric`;

		fetch(url_forecast).then(
				data =>(data.json())
			).then(

				weather_data => {
					console.log(weather_data);
					const forecastData = transformForecast(weather_data);
					console.log(forecastData);
					this.setState({ forecastData }) 
				}
			);
	}

renderForcastItemDays( forecastData) {

return forecastData.map(forecast => (
	<ForecastItem 

			key={`${forecast.weekDay}${forecast.hour}`}

			weekDay={forecast.weekDay} 
			hour= {forecast.hour} 
			data={forecast.data}>
		</ForecastItem>));
}

renderProgress = () => {
	return (<h3>cargando pronostico extendido</h3>);
}


	render () {

		const { city } = this.props;
		const {forecastData } = this.state;
		return (<div> 
					<h2 className='forecastTitle'>Pronóstico Extendido  para {city}</h2>
					{forecastData ?
					this.renderForcastItemDays(forecastData) :
					this.renderProgress()}
				</div>);
	}


}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

export default ForecastExtended;