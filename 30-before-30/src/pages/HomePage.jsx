import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import HomeTile from '../components/HomeTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

export function HomePage() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      Welcome to the Home Page
      <HomeTile />
    </div>
  );
}
