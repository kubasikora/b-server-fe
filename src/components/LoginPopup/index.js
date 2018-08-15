import {connect} from 'react-redux'
import LoginPopupView from './LoginPopupView'
import hideLoginPopup from '../../actions/ContentPaneActions/hideLoginPopup'
import logIn from '../../actions/ContentPaneActions/logIn'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideLoginPopup: () => {dispatch(hideLoginPopup())},
    logIn : (data) => {dispatch(logIn(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopupView)
