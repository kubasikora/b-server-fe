import {combineReducers} from 'redux'
import bicycleStationsReducer from './bicycleStationsReducer'
import navigationBarReducer from './navigationBarReducer'

const rootReducer = combineReducers({
  bicycleStations: bicycleStationsReducer,
  navigationBarSettings: navigationBarReducer
});

export default rootReducer;
