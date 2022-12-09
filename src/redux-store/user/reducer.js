import * as types from './type';
const INITIAL_STATE = {
  applicationData: [],
  isLoading: false,
  isError: false,
  singupUserData: {},
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SINGUP_USER_DATA:
      return { ...state, singupUserData: action.payload };
    case types.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case types.IS_ERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
};
