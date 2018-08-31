import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { counter } from './counter';
import { formData } from './form';

export const reducers = combineReducers ({
  form: formReducer,
//   counter,
  formData
});
