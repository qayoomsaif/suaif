import * as types from './type';
export const setExecutor = data => ({
  type:types.SET_EXECUTOR,
  payload: data,
});
