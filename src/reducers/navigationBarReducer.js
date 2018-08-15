const initialState = {
    loginPopup: false
}

const navigationBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SHOW_LOGIN_POPUP':
			return {
				...state,
				loginPopup: true
            }
            
        case 'HIDE_LOGIN_POPUP':
			return {
				...state,
				loginPopup: false
			}
		default:
			return { ...state }

	}
}

export default navigationBarReducer;
