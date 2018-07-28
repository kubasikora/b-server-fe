import axios from 'axios'
import fetchBicycleStationsInfoAck from './fetchBicycleStationsInfoAck'
import fetchBicycleStationsInfoError from './fetchBicycleStationsInfoError'

const fetchBicycleStationsInfo = (endPointURL) => {
		return dispatch => {
				axios.get(endPointURL, {crossdomain: true})
				.then(response => fetchBicycleStationsInfoAck(dispatch,response))
				.catch(error => fetchBicycleStationsInfoError(dispatch));
			}	
	}

export default fetchBicycleStationsInfo

