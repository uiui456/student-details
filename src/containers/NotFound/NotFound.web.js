import * as React from 'react';
import { Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: '30px',
    minHeight: '100px'
  }
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <h1>URL is Not Found</h1>
        </Grid>
      </Grid>
    </Card>
  );
};

export default React.memo(NotFound);
