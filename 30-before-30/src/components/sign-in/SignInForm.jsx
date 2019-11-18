import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {FormInput} from '../form-input/FormInput';
import {OrangeButton} from '../button/OrangeButton';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function SignInForm({ setState, email, password }) {
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    setState({ email: '', password: '' })
  }

  const handleChange = e => {
    const {value, name} = e.target;
    setState({ [name]: value });
  }

  return(
    <Card className={classes.card}>
      <CardContent>
        <h2>WELCOME BACK!</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            handleChange={handleChange}
            label="Email"
            value={email}
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