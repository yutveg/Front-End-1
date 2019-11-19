import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import SignInForm from '../components/sign-in/SignInForm';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:"center",
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    zIndex: 2,
  },
  card: {
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
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="Men running toward ocean on a beach"
            height="140"
            image="https://unsplash.com/photos/1mtPJuiteRI"
          />
        </Card>   
      </div>
    </>
  )
}