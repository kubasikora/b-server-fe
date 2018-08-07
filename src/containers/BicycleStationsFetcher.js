import {connect} from 'react-redux'
import BicyclePanel from '../components/BicyclePanel/BicyclePanel'
import fetchBicycleStationsInfo from '../actions/BicyclePanelActions/fetchBicycleStationsInfo'

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

export default connect(mapStateToProps, mapDispatchToProps)(BicyclePanel)
