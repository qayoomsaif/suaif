import * as types from './type';

export const setIsError = data => ({
  type: types.IS_ERROR,
  payload: data,
});
export const setLoading = data => ({
  type: types.IS_LOADING,
  payload: data,
});
export const updateApplicationData = data => {
  return async (dispatch, store) => {
    try {
      dispatch({
        type: types.APPLICATION_DATA,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: types.APPLICATION_DATA,
        payload: [],
      });
    }
  }
}
// export const setSingupUserData = data => {
//     type:types.SINGUP_USER_DATA,
    
//   // return async (dispatch, store) => {    
//   //     dispatch({
//   //       type: types.SINGUP_USER_DATA,
//   //       data: data,
//   //     });
    
//   // };
// }
export const setSingupUserData = data => ({
  type: types.SINGUP_USER_DATA,
  payload: data,
});

