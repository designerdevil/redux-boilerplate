import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import myReducer from '../reducer/reducer';

const moduleStore = createStore(myReducer, applyMiddleware(thunk));

export default moduleStore;
