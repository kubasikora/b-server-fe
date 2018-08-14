import {connect} from 'react-redux'
import LoginPopupView from './LoginPopupView'
import hideLoginPopup from '../../actions/ContentPaneActions/hideLoginPopup'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideLoginPopup: () => {dispatch(hideLoginPopup())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopupView)
