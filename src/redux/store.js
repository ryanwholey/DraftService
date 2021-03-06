import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk)(createStore)(reducer);

store.subscribe(() => {
  let state = store.getState();
  console.log('store says: ', state);
});

export default store;