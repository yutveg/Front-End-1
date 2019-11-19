import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#FFE6CD',
  },

  linksContainer: {
    width: '30vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5vw'
  },
  link: {
    textDecoration: 'none',
    fontSize: '1em',
    letterSpacing: '2px',
    color: '#8F573B',
    fontWeight: '700',
    fontSize: '.8em',
    // margin: '2.5vw'
  }
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.link} to="/">
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

  export default Nav