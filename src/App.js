import React, { Component } from 'react';
//import PropTypes from 'prop-types';
// import { createStore } from 'redux'; => se lleva al index.js de la carpeta store
// funcion que recibe por parametro 2 funciones, una para disparar las acciones
//import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
// antes era LocationList, ahora se pasa LocationListContainer
import LocationListContainer from './containers/LocationListContainer';
// antes era ForecastExtended, ahora pasa a ForecastExtendedContainer 
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
// se saca setCity 
//import { setCity } from './actions/index.js';
// import { store } from './store'; => se lleva a index.js de la carpeta src
import './App.css';

const cities = [
	'Buenos Aires,ar',
	'Bogotá, col',
	'Santiago,scl',
	'Ciudad de México,mx',
	'Madrid,es',
	'Rio de Janeiro,br',
];


//antes de crear la carpeta store, se lleva al index.js de la carpeta store
// const store = createStore(() => {}, 
//   window.__REDUX_DEVTOOLS_EXTENSION__&& 
//   window.__REDUX_DEVTOOLS_EXTENSION__());

//action creator => esto se va a index.js de de la carpeta actions
// const setCity = (value) => (
//   {
//     type: 'setCity',
//     value
//   }
// )

class App extends Component {

  // 
  // constructor() {
  //   super();
   
  //   this.state = { 
  //     city: null
  //   };
  // }
 
  //esto se hace despues del constructor y la ultima optimizacion del render
  // ahora se va a LocationListContainer.js
  // handleSelectionLocation = city => {
  //     this.setState({ city });
  //     console.log(`hadlerSelectionLocation ${city}`);

  //     // const action = {
  //     //   type: 'setCity',
  //     //   value: city
  //     //   }

  //     //dispatch va abajo ahora
  //     // store.dispatch(setCity(city));

  //     //dispatch va abajo ahora
  //     /*store.dispatch(setCity(city));*/
      
  //     this.props.setCity(city);
  // }

  render() {
    //const { city } =this.state;
    
    return (
    <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar title='Weather App' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
           <LocationListContainer cities = {cities} ></LocationListContainer>
          </Col>
         <Col xs={12} md={6}>
          <Paper zDepth={4}>
            <div className= 'detail'>
              <ForecastExtendedContainer ></ForecastExtendedContainer>
            </div>
          </Paper>
         </Col>
        </Row>
        </Grid>

      </MuiThemeProvider>      
    );
  }
}

// validar que es una funcion
// App.PropTypes = {
//   setCity: PropTypes.func.isRequired,
// }

/*const mapDispatchToPropsActions = () => {};*/
/*const componentConnected = connect(null, mapDispatchToPropsActions)(App)*/

// // esta funcion nos deja trabajar con las acciones
// ahora se va a LocationListContainer.js
// const mapDispatchToPropsActions = (dispatch) => ({
//     setCity: value => dispatch(setCity(value))
// });

// se lleva al export de LocationListContainer.js
// const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default App;
