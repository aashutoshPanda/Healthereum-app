const initialState = {
  name: "",
  location: "",
  doctorList: [],
  googleData: {},
  sex: "",
  age: 50
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PATIENT": {
      console.log("data from reducer", action.payload);

      return { ...action.payload };
    }
    default:
      return state;
  }
};
export default patientReducer;
