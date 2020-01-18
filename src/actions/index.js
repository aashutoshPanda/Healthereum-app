import {
  LOAD_FONT,
  LOGIN_SUCCESS,
  STORE_USER_DATA
} from "../actions/actionTypes";

import api from "../api";

// export const login = loginData => {
//   return async dispatch => {
//     await api
//       .post("/user/login", loginData)
//       .then(val => {
//         dispatch({ type: LOGIN_SUCCESS, payload: true });
//         const userData = {
//           cred: loginData,
//           token: val.data.token.key,
//           id: val.data.token.user,
//           type: val.data.user_type
//         };
//         console.log("data stored and action called", userData);
//         dispatch({ type: STORE_USER_DATA, payload: userData });
//       })
//       .catch(function(error) {
//         // handle error
//         dispatch({ type: LOGIN_SUCCESS, payload: false });
//         console.log("login  error", error);
//       });
//   };
// };

export const loadFont = () => {
  return {
    type: LOAD_FONT,
    payload: true
  };
};
export const loading = loadingCase => {
  return {
    type: "LOADING",
    payload: loadingCase
  };
};
export const storeUserData = data => {
  return {
    type: "STORE_USER_DATA",
    payload: data
  };
};
