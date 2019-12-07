import * as loginAction from "../action/login.action";

const login = (
  state = {
    loginDetails: null,
    status: null,
    error: null,
    loading: false
  },
  action
) => {
  switch (action.type) {
    case loginAction.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case loginAction.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        loginDetails: action.loginDetails
      });
    case loginAction.LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    default:
      return state;
  }
};
export default login;
