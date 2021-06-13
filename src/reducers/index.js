import { combineReducers } from 'redux';

import data from './data';
import moneyReducer from '../components/money-barre/reducer';

export default combineReducers({
  data,
  moneyReducer
});
