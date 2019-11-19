import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
// Components

const useStyles = makeStyles(theme => ({
  card: {
    width: '30vw',
    backgroundColor: '#5B7331',
    borderRadius: 0,
    margin: '5vw',
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
  },
  link: {
    textDecoration: 'none',
    fontSize: '1em',
    letterSpacing: '2px',
    color: '#FFE6CD',
    fontWeight: '700',
    fontSize: '.8em',
  }
}));

function LoginForm({ values, errors, touched }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent lassName={classes.cardContent}>
        <h2 className={classes.title}>WELCOME BACK!</h2>
        <span className={classes.subheading}>Sign in with your username and password</span>
        <Form>
          <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="username" name="username" placeholder="Username" />
          </div>
          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </div>
          <button className={classes.button} type="submit">LET'S GO!</button>
        </Form>
        <Grid container>
          <Grid item xs>
            <Link className={classes.link} href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link 
              className={classes.link}
              href="#"
              variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const SignInForm = withFormik({
  mapPropsToValues({ username, password, tos, meal }) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .required("Password is required")
  }),

  handleSubmit(values, { resetForm, setSubmitting }) {
      axios
        .post('https://project-30-before-30.herokuapp.com/api/auth/login', values)
        .then(res => {
          console.log(res);
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err);
          setSubmitting(false);
        });
    }
  })(LoginForm);

export default SignInForm;