import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  logo: {
    margin: '5vw',
    width: '160px',
  }
}))

export function Logo() {
  const classes = useStyles();
  return(
    <>
      <img className={classes.logo} src='https://i.ibb.co/tZM4DTB/Logo.png' alt='30 Before 30 logo' />
    </>
  )
}