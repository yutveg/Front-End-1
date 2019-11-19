import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#FFE6CD",
    color: "#8F573B",
    fontFamily: "‘Rubik’, sans-serif",
    letterSpacing: '2px'
    
  }
}));

export const OrangeButton = () => {
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" className={classes.button} />
    </>
  );
}