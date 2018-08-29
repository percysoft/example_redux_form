import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';

const CONFIG_REDUX_EXTENSION = (
  window.devToolsExtension && window.devToolsExtension()
);


const initialState = {};


export const store = createStore(
  reducer,
  initialState,
  CONFIG_REDUX_EXTENSION
);
