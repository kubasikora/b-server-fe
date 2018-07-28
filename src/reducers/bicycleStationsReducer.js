const initialState = {
  bicycleStationsInfo: []
}

const bicycleStations = (state = initialState, action) => {
  switch(action.type){
	case 'FETCH_BICYCLE_STATIONS_INFO_ACK':
		console.log('FETCH_BICYCLE_STATIONS_INFO_ACK');
		return {
			...state,
			bicycleStationsInfo: action.payload
			}
		
	case 'FETCH_BICYCLE_STATIONS_INFO_ERROR':
		console.log('FETCH_BICYCLE_STATIONS_INFO_ERROR');
		return {...state}
		
    default:
      return {...state}
  }
}

export default bicycleStations;
