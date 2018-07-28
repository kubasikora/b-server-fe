import React, { Component } from 'react';
import Header from './Header'
import BicycleStationsFetcher from '../containers/BicycleStationsFetcher'
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios';

class App extends Component {

	componentDidMount(){
		axios.get('/server.json').then((response) => {
			console.log(response.data);
		});
	}

	render() {
    return (	
			<div>
				<Header />
				<Grid fluid={true}>
					<Row>
						<Col sm={6} md={5}>
							<BicycleStationsFetcher />
						</Col>
						<Col sm={6} md={5}>
							<p> 
							
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
		);
  }
}

export default App;
