import * as actionTypes from './ActionTypes';

export const initialState = {
  firstName: '',
  lastName: '',
  streetName: '',
  city: '',
  phoneNumber: '',
  GPA: '',
  studentDetails: [],
  selectedRow: []
};

export const addDetails = (state, data) => {
  const finalState = [];
  const object = {
    firstName: data.firstName,
    lastName: data.lastName,
    streetName: data.streetName,
    city: data.city,
    phoneNumber: data.phoneNumber,
    GPA: data.GPA
  };

  finalState.push(object);
  state.map((item) => {
    finalState.push(item);
  });
  return finalState;
};

const deleteStudentDetails = (state, payLoad) => {
  let data = state.studentDetails;
  console.log('state', state);
  console.log(data);
  console.log('payLoad', payLoad);
  if (payLoad.length > 0) {
    data.filter((item, index) => {
      payLoad.filter((deleteEvent) => {
        if (item.firstName === deleteEvent) {
          state.studentDetails.splice(index, 1);
        }
      });
    });
    return data;
  }
return data;
};
const combinedReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROJECT_STUDENT_DETEALIS:
      switch (action.payLoad ? action.payLoad.id : '') {
        case 'firstname':
          return Object.assign(state, {
            firstName: action.payLoad.value
          });
        case 'lastname':
          return Object.assign(state, {
            lastName: action.payLoad.value
          });
        case 'streetname':
          return Object.assign(state, { ...state.studentDetails, streetName: action.payLoad.value });
        case 'phonenumber':
          return Object.assign(state, { ...state.studentDetails, phoneNumber: action.payLoad.value });
        case 'city':
          return Object.assign(state, { ...state.studentDetails, city: action.payLoad.value });
        case 'gpa':
          return Object.assign(state, { ...state.studentDetails, GPA: action.payLoad.value });
        default:
          return state;
      }

    case actionTypes.TOTAL_DETAILS:
      return Object.assign(state, {
        studentDetails: addDetails(state.studentDetails, action.payLoad)
      });
    case actionTypes.DELETE_STUDENT_DETEAILS:
      return {
        ...state,
        studentDetails: [...deleteStudentDetails(state, action.payLoad)]
      };
    case actionTypes.VIEW_STUDENT_DETAILS:
      return Object.assign(state, {
        selectedRow: action.payLoad
      });
    default:
      return state;
  }
};

export default combinedReducers;
