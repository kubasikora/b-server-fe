const fetchBicycleStationsInfoAck = (dispatch, payload) => {
	dispatch({
		type: 'FETCH_BICYCLE_STATIONS_INFO_ACK',
		payload: payload
	});
}

export default fetchBicycleStationsInfoAck;
