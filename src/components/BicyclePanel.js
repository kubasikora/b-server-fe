import React from 'react';
import PropTypes from 'prop-types'
import { Panel, Table } from 'react-bootstrap'

const BicyclePanel = (props) => {
	return (
		<Panel bsStyle="info">
			<Panel.Heading>
				<Panel.Title>Sprawdź czy są dostępne rowery!</Panel.Title>
			</Panel.Heading>
			<Panel.Body>
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>Stacja</th>
							<th>Rowery</th>
							<th>Stojaki</th>
						</tr>
					</thead>
					<tbody>
						{
							props.bicycleStationsInfo.map(element => {
								return (
									<tr key={element.name}>
										<td>{element.name}</td>
										<td>{element.bikes}</td>
										<td>{element.racks}</td>
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
