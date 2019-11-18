import React, { useState } from 'react';
import axios from 'axios';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// Components
import { FormInput } from '../form-input/FormInput';
import { OrangeButton } from '../button/OrangeButton';

const useStyles = makeStyles({
  card: {
    width: "60vw",
    backgroundColor: "#5B7331"
  },
  title: {
    fontSize: 14,
  }
});

export function SignInForm({ username, password }) {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    setUser({ username: '', password: '' })
      axios
        .post('https://project-30-before-30.herokuapp.com/api/auth/login')
        .then(res => {
          console.log("Login data returned", res.data);
          setUser(res.data.results)
        })
        .catch(err => console.log("No data returned", err));
    };


  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return(
    <Card className={classes.card}>
      <CardContent>
        <h2 className={classes.title}>WELCOME BACK!</h2>
        <span className={classes.subheading}>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput 
            name="username"
            type="username"
            handleChange={handleChange}
            label="Username"
            value={username}
            required />
          <FormInput 
            name="password"
            type="password"
            handleChange={handleChange}
            label="Password"
            value={password}
            required />
          <OrangeButton size="small" type="submit">Sign In</OrangeButton>
        </form>
      </CardContent>
    </Card>
  );
}