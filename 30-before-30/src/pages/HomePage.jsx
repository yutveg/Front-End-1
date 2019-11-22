import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    marginTop: '5vw',
    marginBottom: 0,
  }
}));

export function HomePage() {
  const classes = useStyles();

  // const [photos, setPhotos] = useState([]);

  // useEffect(() => {
  //   axios
    // .get('https://api.unsplash.com/collections/8934471/photos?client_id=2f7981326e828db3eaee599cfc1fee407530f50d35b6199c75e1ff7f40ffa658')
    // .then(res => {
  //     console.log('Huzzah! Photos were returned', res.data);
  //     setPhotos(res.data);
  //   })
  //   .catch(err => {
  //     console.log('Photos were not returned', err)
  //   })
  // },[]);
  return (
    <div className={classes.root}>
      <h2 className={classes.tileTitle}>
        CHECK OUT SOME COOL LISTS
      </h2>
      <GridList className={classes.gridList}>
      {/* {photos.slice(0,3).map(image => ( */}
        <HomeTile  />
      {/* ))} */}
      </GridList>
    </div>
  );
}
