import * as types from './type';
export const changeMode = data => ({
  type:types.CHANGE_MODE,
  payload: data,
});
