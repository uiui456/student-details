import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  Link
} from "react-router-dom";
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styles from './DetailView.module.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '30px'
  },
  idCard: {
    minWidth: 150,
    padding: '30px',
    minHeight: 150,
    background: 'blue'
  }
});

const DetailView = () => {
  const currentState = useSelector((state) => state);
  const classes = useStyles();
  return (
    <>
      {Object.values(currentState).length > 0 ? (
        <Card className={classes.root} variant="outlined">
          <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
            <Card className={classes.idCard} variant="outlined">
              </Card>
            </Grid>
            <Grid item md={8} sm={8} xs={12}>
            <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
              <label htmlFor="firstname:"> First Name: </label>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography gutterBottom variant="subtitle1">
                {currentState.firstName}
              </Typography>
            </Grid>
            </Grid>
         
          <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
              <label htmlFor="LastName"> LastName: </label>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography gutterBottom variant="subtitle1">
                {currentState.lastName}
              </Typography>
            </Grid>
            </Grid>
          <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
              <label htmlFor="Street Name/Number"> Street Name/Number: </label>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography gutterBottom variant="subtitle1">
                {currentState.streetName}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
              <label htmlFor="City"> City: </label>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography gutterBottom variant="subtitle1">
                {currentState.city}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
              <label htmlFor="phoneNumber"> phoneNumber: </label>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography gutterBottom variant="subtitle1">
                {currentState.phoneNumber}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={10}>
            <Grid item md={4} sm={4} xs={12}>
              <label htmlFor="gpa"> GPA: </label>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography gutterBottom variant="subtitle1">
                {currentState.GPA}
              </Typography>
            </Grid>
          </Grid>
              </Grid>
            
            <Grid item md={8} sm={8} xs={12}>
              <Link to={`/`} style={{marginRight: '20px'}}>Create New Student Details</Link>
              <Link to={`/TableView`} >View Student Details</Link>
            </Grid>
          </Grid>
        </Card>
      ) : (
        'Loading....'
      )}
    </>
  );
};

export default withRouter(React.memo(DetailView));
