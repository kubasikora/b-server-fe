import {connect} from 'react-redux'
import NavigationBarView from './NavigationBarView'
import showLoginPopup from '../../actions/ContentPaneActions/showLoginPopup'

const mapStateToProps = state => {
  return {
      loginPopupVisible: state.navigationBarSettings.loginPopup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showLoginPopup: () => {dispatch(showLoginPopup())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBarView)
