import { ADD_DOC, LOAD_FONT } from "../actions/actionTypes";
import { ADD_PATIENT } from "../actions/actionTypes";
// import api from "../api";
// import { getData } from "../helper/asyncStore";

// export const addDoc = postdata => {
//   return async dispatch => {
//     // dispatch(addTodoStarted());

//     const googleData = await JSON.parse(await getData("userInfo"));
//     console.log("post data combined", {
//       ...postdata,
//       googleData
//     });
//     api
//       .post("/doctor/add", { postdata, googleData })
//       .then(val => {
//         console.log("doneee", val.data);

//         dispatch({ type: ADD_DOC, payload: val.data });
//         console.log("post done");
//       })
//       .catch(function(error) {
//         // handle error
//         console.log("post doc error", error);
//       });
//   };
// };
// export const addPatient = postdata => {
//   return async dispatch => {
//     // dispatch(addTodoStarted());

//     const googleData = await JSON.parse(await getData("userInfo"));
//     console.log("post data combined patient", {
//       ...postdata,
//       googleData
//     });
//     api
//       .post("/patient/add", { ...postdata, googleData })
//       .then(val => {
//         console.log("doneee", val.data);
//         dispatch({ type: ADD_PATIENT, payload: val.data });
//       })
//       .catch(function(error) {
//         // handle error
//         console.log("post patient error", error);
//       });
//   };
// };
export const loadFont = () => {
  return {
    type: LOAD_FONT,
    payload: true
  };
};
