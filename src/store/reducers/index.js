import { combineReducers } from 'redux';

// import {
//   TURN_LOADING,
// } from '../actions';
// import authReducer from './auth';
import modalReducer from './modal';

const initialState = {
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case TURN_LOADING: {
    //   return { ...state,
    //     loading: action.payload 
    //   };
    // }
    default:
      return state;
  }
};

const reducers = {
  rootReducer,
  // authReducer,
  modalReducer,
};

const allReducers = combineReducers(reducers);

export default allReducers;