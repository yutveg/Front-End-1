import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { HomeTile } from '../components/HomeTile';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tileTitle: {
    textAlign: 'center',
    letterSpacing: '2px',
    color: '#8F573B',
    fontWeight: '700',
    fontSize: '1.5em',
    marginBottom: 0,
  }
}));

export function HomePage() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <h2 className={classes.tileTitle}>
        CHECK OUT SOME COOL LISTS
      </h2>
      <GridList cellHeight={180} className={classes.gridList}>
        <HomeTile />
      </GridList>
    </div>
  );
}
