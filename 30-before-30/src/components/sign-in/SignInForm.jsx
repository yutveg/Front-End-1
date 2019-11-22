import React, {useContext} from 'react';
import Context, {Provder, Consumer} from '../../contexts/context'

import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import decode from 'jwt-decode'

// Components
//import { Redirect } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  card: {
    width: '500px',
    height: '325px',
    backgroundColor: '#5B7331',
    borderRadius: 0,
    border: 'none',
    margin: '5vw',
  },
  cardContent: {
    margin: '50px',
    padding: '0px 0px 0px 0px',
  },
  title: {
    letterSpacing: '2.5px',
    color: '#FFE6CD',
    fontWeight: '700',
    fontSize: '2em',
    margin: 0
  },
  subheading: {
    letterSpacing: '1.5px',
    color: '#FFE6CD',
    fontWeight: '500',
    fontSize: '1em',
    marginTop: '10px',
    marginBottom: '15px',
  },
  // form: {
  //   width: '30vw',

  // },
  field: {
    width: '395px',
    height:'30px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: 0,
    color: "#8F573B",
    fontFamily: "‘Rubik’, sans-serif",
    letterSpacing: '2px',
    border: 'none',
  },
  button: {
    width: '220px',
    height:'40px',
    border: 'none',
    backgroundColor: "#FFE6CD",
    fontFamily: "‘Rubik’, sans-serif",
    letterSpacing: '2px',
    borderRadius: 0,
    color: '#8F573B',
    fontWeight: '700',
    fontSize: '.8em',
  },
  link: {
    textDecoration: 'none',
    letterSpacing: '2px',
    color: '#FFE6CD',
    fontWeight: '700',
    fontSize: '.8em',
  }
}));

function LoginForm({ values, errors, touched }) {
  const {user} = useContext(Context);
  console.log(user)
  const classes = useStyles();

  // const [user, setUser] = useState({
  //   username: '',
  //   password: ''
  // });
  // const {isAuthenticated} = false;


  // const handleChange = e => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  return(
    
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <p className={classes.title}>WELCOME BACK!</p>
        <span className={classes.subheading}>Sign in with your username and password</span>
        <Form className={classes.form}>
          <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field className={classes.field} type="username" name="username" placeholder="Username" />
          </div>
          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field className={classes.field} type="password" name="password" placeholder="Password" />
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
  mapPropsToValues({ username, password }) {
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
        console.log(values)
        const token = res.data.token
        console.log(token);
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username', values.username)
        localStorage.setItem('userId', decode(token).id)
        
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