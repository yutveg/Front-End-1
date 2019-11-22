import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { HomeTile } from '../components/HomeTile';

const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {

  }
}));

export function HomePage() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      Welcome to the Home Page
      <GridList cellHeight={180} className={classes.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}> */}
          <HomeTile />
        {/* </GridListTile> */}
      </GridList>
    </div>
  );
}
