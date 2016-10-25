import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux';

export default createStore(
  rootReducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);
