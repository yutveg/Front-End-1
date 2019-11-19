import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SignInForm } from '../components/sign-in/SignInForm';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    zIndex: 2,
  },
  formImg: {
    overflow: 'hidden',
    width: '30vw',

  }
}))

export function SignInPage() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
          <SignInForm className={classes.form} />
          <img className={classes.formImg} />
        </div>
    </>
  )
}