import React from 'react';
import {Panel, Table} from 'react-bootstrap'

const BicyclePanel = (props) => {
	
	let processedInfo = [
		{
			name: "Rondo Jazdy Polskiej",
			bikes: "0",
			racks: "24"
		},
		{
			name: "Plac Politechniki",
			bikes: "0",
			racks: "54"
		},
		{
			name: "Plac Unii Lubelskiej",
			bikes: "0",
			racks: "24"
		},
		{
			name: "Marszałkowska - Litewska",
			bikes: "0",
			racks: "15"
		},
		{
			name: "Metro Politechnika",
			bikes: "0",
			racks: "20"
		},
		{
			name: "Plac Zbawiciela",
			bikes: "0",
			racks: "12"
		},
		{
			name: "Kaczyńskiego - Rektorska",
			bikes: "0",
			racks: "19"
		}
	
	];
	
	if(props.placeInfo.length !== 0){
		let firstInfo, secondInfo, thirdInfo;
			firstInfo = props.placeInfo.filter(obj => {
				return obj.name === "Plac Politechniki";
			})[0]
	
			secondInfo = props.placeInfo.filter(obj => {
				return obj.name === "Plac Politechniki 2";
			})[0]
		
			const mergedInfo = {
				name: "Plac Politechniki",
				bikes: String(Number(firstInfo.bikes) + Number(secondInfo.bikes)),
				racks: String(Number(firstInfo.racks) + Number(secondInfo.racks))
			}
			
			thirdInfo = props.placeInfo.filter(obj => {
				return obj.name === "ul. Waryńskiego-ul. Nowowiejska-Metro Politechnika";
			})[0]
			
			let processedThirdInfo = {
				...thirdInfo,
				name: "Metro Politechnika",
			}
			
			processedInfo = [
				props.placeInfo[0],
				mergedInfo,
				props.placeInfo[3],
				props.placeInfo[4],
				processedThirdInfo,
				props.placeInfo[6],
				props.placeInfo[7]
			]
	}
	
	return(
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
						<tr>
							<td>{processedInfo[0].name}</td>
							<td>{processedInfo[0].bikes}</td>
							<td>{processedInfo[0].racks}</td>
						</tr>
						
						<tr>
							<td>{processedInfo[1].name}</td>
							<td>{processedInfo[1].bikes}</td>
							<td>{processedInfo[1].racks}</td>
						</tr>
						
						<tr>
							<td>{processedInfo[2].name}</td>
							<td>{processedInfo[2].bikes}</td>
							<td>{processedInfo[2].racks}</td>
						</tr>
						
						<tr>
							<td>{processedInfo[3].name}</td>
							<td>{processedInfo[3].bikes}</td>
							<td>{processedInfo[3].racks}</td>
						</tr>
						
						<tr>
							<td>{processedInfo[4].name}</td>
							<td>{processedInfo[4].bikes}</td>
							<td>{processedInfo[4].racks}</td>
						</tr>
						
						<tr>
							<td>{processedInfo[5].name}</td>
							<td>{processedInfo[5].bikes}</td>
							<td>{processedInfo[5].racks}</td>
						</tr>
						
						<tr>
							<td>{processedInfo[6].name}</td>
							<td>{processedInfo[6].bikes}</td>
							<td>{processedInfo[6].racks}</td>
						</tr>
					</tbody>	
				</Table>
			</Panel.Body> 
		</Panel>
	)
};

export default BicyclePanel;
