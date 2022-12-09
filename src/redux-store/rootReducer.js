import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import configReducer from './config/reducer';
import excutorReducer from './executor/reducer';
import assetsReducer from './assets/reducer';
export default combineReducers({
  user: userReducer,
  config: configReducer,
  executor: excutorReducer,
  assets: assetsReducer
});
