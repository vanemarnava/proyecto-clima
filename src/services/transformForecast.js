import moment from 'moment';
//los dias al español
import 'moment/locale/es';
import transformWeather from './transformWeather';



//primera parte antes de moment
/*const transformForecast = (data) => ({});*/

//con moment

const transformForecast = (data) => (
	data.list.filter(item => (

			moment.unix(item.dt).hour() === 6 || 
			moment.unix(item.dt).hour() === 12 || 
			moment.unix(item.dt).hour() === 18
		)).map(item =>(

			{

				weekDay: moment.unix(item.dt).format('ddd'),
				hour: moment.unix(item.dt).hour(),
				data: transformWeather(item)
			}


		))

	);


export default transformForecast;