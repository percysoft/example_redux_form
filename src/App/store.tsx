import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
});


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const logger = (store:any) => (next:any) => (action:any) => {
  // console.log('dispatching', action)
  let result = next(action)
  // console.log('next state', store.getState())
  return result
}

const enhancer = composeEnhancers(
  applyMiddleware(logger),
);

export const store = createStore(
  rootReducer,
  enhancer
);

console.log(store.getState(), 'store');
