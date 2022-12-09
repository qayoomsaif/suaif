import * as types from './type';
const INITIAL_STATE = {
  lightMode:true
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_MODE:
      return {...state, lightMode: action.payload};
    default:
      return state;
  }
};
