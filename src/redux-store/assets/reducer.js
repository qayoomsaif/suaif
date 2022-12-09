import * as types from './type';
const INITIAL_STATE = {
  assets: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_ASSET_DRIVER_LICENSE:
      return {...state, assets: action.payload};
    default:
      return state;
  }
};
