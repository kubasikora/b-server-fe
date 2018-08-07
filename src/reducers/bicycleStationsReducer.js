const initialState = {
	bicycleStationsInfo: []
}

const bicycleStations = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_BICYCLE_STATIONS_INFO_ACK':
			console.log('FETCH_BICYCLE_STATIONS_INFO_ACK');
			return {
				...state,
				bicycleStationsInfo: action.payload.data,
				error: false
			}

		case 'FETCH_BICYCLE_STATIONS_INFO_ERROR':
			console.log('FETCH_BICYCLE_STATIONS_INFO_ERROR');
			return {
				...state,
				error: true
			}

		case 'CLEAR_BICYCLE_HISTORY':
			console.log('CLEAR_BICYCLE_HISTORY');
			return {
				...state,
				bicycleStationsInfo: [],
				error: false
			}

		default:
			return { ...state }

	}
}

export default bicycleStations;
