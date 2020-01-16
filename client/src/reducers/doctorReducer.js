const initialState = {
  name: "",
  degree: "",
  experience: 0,
  location: "",
  specialisations: [],
  patientList: [],
  googleData: {}
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOC": {
      console.log("data from reducer", action.payload);
      // return state;
      return { ...action.payload };
    }
    default:
      return state;
  }
};
export default doctorReducer;
