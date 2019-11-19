import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import { Logo } from '../../assets/Logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    height: '8.3vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FFE6CD',
  },
  linksContainer: {

  },
  link: {

  }
}));

export const Nav =()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Link className={classes.logoContainer} to="/">
      <Logo className={classes.logo} />
    </Link>
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