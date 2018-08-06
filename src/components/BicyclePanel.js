import React from 'react';
import PropTypes from 'prop-types'
import { Panel, Table } from 'react-bootstrap'

const BicyclePanel = (props) => {

	let bicycleInfo;
	if (props.bicycleStationsInfo) {
		bicycleInfo = [...props.bicycleStationsInfo];
		let toChangeName = bicycleInfo.find(element => {
			if (element.name == "ul. Waryńskiego-ul. Nowowiejska-Metro Politechnika") {
				element.name = "Metro Politechnika";
				return true;
			}
			else return false;
		})

	}
	else bicycleInfo = [];

	return (
		<Panel bsStyle="info">
			<Panel.Heading>
				<Panel.Title>Sprawdź czy są dostępne rowery!</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
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
			</Panel.Body>
		</Panel>
	)
};

export default BicyclePanel;
