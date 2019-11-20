import React, { useState } from 'react';
import axios from 'axios';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
// Components
import { FormInput } from '../form-input/FormInput';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  card: {
    width: '30vw',
    backgroundColor: '#5B7331',
    borderRadius: 0,

  },
  cardContent: {
    margin: '2.5vw'
  },
  title: {
    fontSize: 20,
    letterSpacing: '2px',
    marginBottom: '2vw',
    color: '#FFE6CD',
  },
  subheading: {
    fontSize: 14,
    letterSpacing: '2px',
    marginBottom: '1.5vw',
    color: '#FFE6CD',

  },
  input: {
    width: '20vw',
    marginTop: '.5vw',
    marginBottom: '.5vw',
    borderRadius: 0,


  },
  button: {
    marginTop: '2vw',
    width: '12vw',
    backgroundColor: "#FFE6CD",
    color: "#8F573B",
    fontFamily: "‘Rubik’, sans-serif",
    letterSpacing: '2px',
    borderRadius: 0,
  }
}));

export function SignInForm({ username, password }) {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const {isAuthenticated} = false;
if (isAuthenticated) {
  return <Redirect to='/HomePage' />;
}

  const handleSubmit = e => {
    e.preventDefault();
    //setUser({ username: '', password: '' })
    console.log(user)
      axios
        .post('https://project-30-before-30.herokuapp.com/api/auth/login', user)
        .then(res => {
          console.log(res);
          setUser(res.data.results)
          console.log(user)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userId', res.data.userId)
          //props.history.push('/HomePage')
        })
        .catch(err => console.log("No data returned", err));
    };


  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return(
    <Card className={classes.card}>
      <CardContent lassName={classes.cardContent}>
        <h2 className={classes.title}>WELCOME BACK!</h2>
        <span className={classes.subheading}>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput 
            className={classes.input}
            name="username"
            type="username"
            handleChange={handleChange}
            label="Username"
            value={username}
            required />
          <FormInput 
            className={classes.input}
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
            value={password}
            required />
          <Button 
            className={classes.button}
            variant="contained"
            size="medium"
            type="submit">
              Sign In
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link 
              // href="https://30B430.com/signup/"
              variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}