import { combineReducers } from 'redux';

import {
	IMGS_LOADED,
} from './constants'

let initialState = {
	images: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
	case IMGS_LOADED:
		return { ...state, images: action.images };
	default:
		return state;
	}
};

export default reducer

// export default combineReducers(Object.assign(
// 	reducer,
// ));
