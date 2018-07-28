import {combineReducers} from 'redux'
import bicycleStationsReducer from './bicycleStationsReducer'

const rootReducer = combineReducers({
  bicycleStations: bicycleStationsReducer
});

export default rootReducer;
