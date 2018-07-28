import {connect} from 'react-redux'
import BicyclePanel from '../components/BicyclePanel'
import fetchBicycleStationsInfo from '../actions/fetchBicycleStationsInfo'

const mapStateToProps = state => {
  return {
    bicycleStationsInfo: state.bicycleStations.bicycleStationsInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBicycleStationsInfo: dispatch(fetchBicycleStationsInfo)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BicyclePanel)
