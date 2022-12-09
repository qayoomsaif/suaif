import * as types from './type';
const INITIAL_STATE = {
  executors: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_EXECUTOR:
      return {...state, executors: action.payload};
    default:
      return state;
  }
};
