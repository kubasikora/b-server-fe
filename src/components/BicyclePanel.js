import React from 'react';
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import { Panel, Table } from 'react-bootstrap'

const BicyclePanel = (props) => {

	console.log(props.bicycleStationsInfo)
	let bicycleTable;
	if (props.bicycleStationsInfo.length !== 0) {
		let bicycleInfo = [...props.bicycleStationsInfo];
		let toChangeName = bicycleInfo.find(element => {
			if (element.name == "ul. Waryńskiego-ul. Nowowiejska-Metro Politechnika") {
				element.name = "Metro Politechnika";
				return true;
			}
			else return false;
		})
		bicycleTable =
			<Table striped bordered condensed hover responsive>
				<thead>
					<tr>
						<th>Stacja</th>
						<th>Rowery</th>
						<th>Stojaki</th>
					</tr>
				</thead>

				<tbody>
					{
						bicycleInfo.map(element => {
							return (
								<tr key={element.name}>
									<td>{element.name}</td>
									<td>{element.bikes}</td>
									<td>{element.bike_racks}</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
	}

	else bicycleTable = <Spinner />

	return (
		<Panel bsStyle="info">
			<Panel.Heading>
				<Panel.Title>Sprawdź czy są dostępne rowery!</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				{bicycleTable}
			</Panel.Body>
		</Panel>
	)
};

export default BicyclePanel;
