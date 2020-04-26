import * as actionTypes from './ActionTypes';

export const studentDetails = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.PROJECT_STUDENT_DETEALIS,
    payload
  });
};
