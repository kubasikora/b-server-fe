import {connect} from 'react-redux'
import NavigationBarView from './NavigationBarView'
import showLoginPopup from '../../actions/ContentPaneActions/showLoginPopup'
import hideLoginPopup from '../../actions/ContentPaneActions/hideLoginPopup'

const mapStateToProps = state => {
  return {
      loginPopupVisible: state.navigationBarSettings.loginPopup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showLoginPopup: () => {dispatch(showLoginPopup())},
    hideLoginPopup: () => {dispatch(hideLoginPopup())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBarView)
