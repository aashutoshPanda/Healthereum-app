import { combineReducers } from "redux";
import doctorReducer from "./doctorReducer";
import patientReducer from "./patientReducer";

export default combineReducers({
  doctor: doctorReducer,
  patient: patientReducer
});
