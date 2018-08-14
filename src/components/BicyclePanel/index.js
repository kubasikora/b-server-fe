import {connect} from 'react-redux'
import BicyclePanelView from './BicycylePanelView'
import fetchBicycleStationsInfo from '../../actions/BicyclePanelActions/fetchBicycleStationsInfo'

const mapStateToProps = state => {
  return {
    bicycleStationsInfo: state.bicycleStations.bicycleStationsInfo,
    error: state.bicycleStations.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBicycleStationsInfo: (endpointUrl) => dispatch(fetchBicycleStationsInfo(endpointUrl))
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BicyclePanelView)
