import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link
} from "react-router-dom";
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import TextBox from '../../components/TextBox/TextBox.web';
import * as actionTypes from '../../store/ActionTypes';
import Button from '../../components/Button/Button.web';
import styles from './HomePage.module.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '30px'
  }
});

const HomePage = ({ history }) => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state);

  const classes = useStyles();

  const studentDetailshandler = (event) => {
    dispatch({
      type: actionTypes.PROJECT_STUDENT_DETEALIS,
      payLoad: event
    });
  };

  const saveHandler = () => {
    dispatch({
      type: actionTypes.TOTAL_DETAILS,
      payLoad: currentState
    });
    Object.keys(currentState).length > 0 && history.push('/TableView');
  };
  return (
    <>
      <Card className={classes.root} variant="outlined">
        
        <Grid container spacing={3}>
          <Grid item md={4} sm={4} xs={12}>
            <label htmlFor="firstname:"> First Name: </label>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <TextBox
              type="text"
              value={currentState.firstName}
              placeholder="Enter firstname"
              id="firstname"
              type="text"
              name="text_Box_firstname"
              textBoxHandler={studentDetailshandler}
              maxlength={25}
              minLength={3}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <label htmlFor="lastname"> Last Name: </label>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <TextBox
              type="text"
              value={currentState.lastName}
              placeholder="Enter lastname"
              id="lastname"
              type="text"
              name="text_Box_lastname"
              textBoxHandler={studentDetailshandler}
              maxlength={25}
              minLength={3}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <label htmlFor="streetname"> Street Name/Number</label>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <TextBox
              type="text"
              value={currentState.streetName}
              placeholder="Enter street name/number"
              id="streetname"
              type="text"
              name="text_Box_streetname"
              textBoxHandler={studentDetailshandler}
              maxlength={25}
              minLength={3}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <label htmlFor="city"> City: </label>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <TextBox
              type="text"
              value={currentState.city}
              placeholder="Enter city"
              id="city"
              type="text"
              name="text_Box_city"
              textBoxHandler={studentDetailshandler}
              maxlength={10}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <label htmlFor="phonenumber"> phoneNumber: </label>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <TextBox
              type="text"
              value={currentState.phoneNumber}
              placeholder="Enter phonenumber"
              id="phonenumber"
              type="number"
              name="text_Box_phonenumber"
              textBoxHandler={studentDetailshandler}
              maxlength={10}
            />
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            <label htmlFor="gpa"> GPA: </label>
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            <TextBox
              type="text"
              value={currentState.GPA}
              placeholder="Enter GPA"
              id="gpa"
              type="text"
              name="text_Box_gpa"
              textBoxHandler={studentDetailshandler}
              maxlength={25}
              minLength={3}
            />
          </Grid>
          <Grid item md={8} sm={8} xs={12}>
            {' '}
            <Button value="save" buttonClickHandler={saveHandler} />{' '}
          </Grid>

          <Grid item md={8} sm={8} xs={12}>
              <Link to={`/TableView`} >View Student Details</Link>
            </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default withRouter(React.memo(HomePage));
