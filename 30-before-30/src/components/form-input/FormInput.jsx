import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    backgroundColor: "white",
  },
}));

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  const classes = useStyles();
  return (
    <TextField
      required
      onChange={handleChange}
      {...otherProps}
      id="outlined-password-input"
      label={label}
      className={classes.textField}
      margin="normal"
      variant="outlined"
    />
  );
}