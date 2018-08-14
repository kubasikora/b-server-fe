import {connect} from 'react-redux'
import ContentPaneView from './ContentPaneView'

const mapStateToProps = state => {
  return {
    loginPopup: state.navigationBarSettings.loginPopup
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentPaneView)
