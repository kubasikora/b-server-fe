import React, { Component } from 'react';
import Header from './Header'
import BicycleStationsFetcher from '../containers/BicycleStationsFetcher'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {

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
