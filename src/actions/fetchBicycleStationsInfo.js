import axios from 'axios'
import fetchBicycleStationsInfoAck from './fetchBicycleStationsInfoAck'
import fetchBicycleStationsInfoError from './fetchBicycleStationsInfoError'
import clearBicycleHistory from './clearBicycleHistory'

const fetchBicycleStationsInfo = (endPointURL) => {
	return dispatch => {
		console.log('fetching')
		dispatch(clearBicycleHistory());
		axios.get(endPointURL)
			.then(response => dispatch(fetchBicycleStationsInfoAck(response)))
			.catch(error => dispatch(fetchBicycleStationsInfoError()))
	}
}

export default fetchBicycleStationsInfo;

