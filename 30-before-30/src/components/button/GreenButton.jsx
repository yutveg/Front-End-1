import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#5B7431",
    color: "#FFE6CD",
    fontFamily: "‘Rubik’, sans-serif",
    letterSpacing: '2px'

  }
}));

export const GreenButton = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.button} />
    </>
  );
}