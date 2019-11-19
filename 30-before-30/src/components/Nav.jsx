import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
//import { Logo } from '../assets/Logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '8vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FFE6CD',
  },
  logo: {
    margin: 'auto, 5vw',
    width: '18vw'
  },
  linksContainer: {
    width: '30vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto, 5vw'
  },
  link: {
    textDecoration: 'none',
    letterSpacing: '2px',
    color: '#8F573B',
    // margin: '2.5vw'
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<Link className={classes.logoContainer} to="/">
        <Logo className={classes.logo} />
  </Link> */}

      <div className={classes.linksContainer}>
        <Link className={classes.link} to="/">
          HOME
        </Link>
        <Link className={classes.link} to="/about">
          ABOUT
        </Link>
        <Link className={classes.link} to="/sign-in">
          SIGN IN
        </Link>
        <Link className={classes.link} to="/sign-up">
          SIGN UP
        </Link>
      </div>
    </div>
);
  }

  export default Nav