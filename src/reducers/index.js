import { combineReducers } from 'redux';
import helloReducer from './helloReducer';
import issueReducer from './issueReducer';

const rootReducer = combineReducers({
  helloReducer,
  issueReducer
});

export default rootReducer;
