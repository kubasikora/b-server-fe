import React from 'react';
import Spinner from '../Spinner'
import { Glyphicon, Panel, Button } from 'react-bootstrap'
import './BicyclePanel.css'
import endPointURL from '../../const/api'
import BicycleTable from './BicycleTable'
import ErrorPanel from './ErrorPanel'


class BicyclePanelView extends React.Component {
	constructor(props) {
		super(props)
		this.refresh = this.refresh.bind(this)
	}

	refresh() {
		this.props.fetchBicycleStationsInfo(endPointURL + '/bicycles')
	}

	componentDidMount() {
		this.refresh()
	}

	render() {

		let bicyclePanelContent;

		if (this.props.error) {
			bicyclePanelContent = <ErrorPanel />
		}
		else if (this.props.bicycleStationsInfo.length !== 0) {
			let bicycleInfo = [...this.props.bicycleStationsInfo];
			bicycleInfo.find(element => {
				if (element.name === "ul. Waryńskiego-ul. Nowowiejska-Metro Politechnika") {
					element.name = "Metro Politechnika";
					return true;
				}
				else return false;
			})
			bicyclePanelContent = <BicycleTable bicycleInfo={bicycleInfo} />
		}

		else bicyclePanelContent = <Spinner />

		return (
			<Panel bsStyle="info">
				<Panel.Heading>
					<Panel.Title>
						Sprawdź czy są rowery!
					<Button bsStyle="primary" bsSize="small" className="refresh-button-style" onClick={this.refresh}>
							<Glyphicon glyph="refresh" />
						</Button>
					</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					{bicyclePanelContent}
				</Panel.Body>
			</Panel>
		)
	};
}

export default BicyclePanelView;
