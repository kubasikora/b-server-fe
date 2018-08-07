const fetchBicycleStationsInfoAck = payload => {
	return {
		type: 'FETCH_BICYCLE_STATIONS_INFO_ACK',
		payload
	};
}

export default fetchBicycleStationsInfoAck;
