// src/store/reducers.js
import { combineReducers } from 'redux';

// Your reducers will go here. For now, let's put a placeholder
const placeholderReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

export default rootReducer;
