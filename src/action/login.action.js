import { SUCCESS, FAILURE, REQUESTING, ERROR } from "../utils/constant";

const data = {
  user: [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9415346313",
      password: "123456"
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9415346314",
      password: "123456"
    },
    {
      id: 3,
      name: "test3",

      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9415346315",
      password: "123456"
    },
    {
      id: 4,
      name: "test4",
      age: "14",
      gender: "male",
      email: "test4@gmail.com",
      phoneNo: "9415346316",
      password: "123456"
    },
    {
      id: 5,
      name: "test5",
      age: "15",
      gender: "male",
      email: "test5@gmail.com",
      phoneNo: "9415346317",
      password: "123456"
    },
    {
      id: 6,
      name: "test6",
      age: "16",
      gender: "male",
      email: "test6@gmail.com",
      phoneNo: "9415346318",
      password: "123456"
    }
  ]
};
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST,
    status: REQUESTING
  };
}

export function loginUserSuccess(loginDetails) {
  return {
    type: LOGIN_USER_SUCCESS,
    status: SUCCESS,
    loginDetails
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    status: ERROR,
    error
  };
}

export function getLogin(userLoginDetails) {
  return async dispatch => {
    dispatch(loginUserRequest());
    try {
      const resultJson = data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(loginUserSuccess(resultJson));
    } catch (e) {
      return dispatch(loginUserFailure(e.message));
    }
  };
}
