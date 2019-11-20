import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';
import Modal from '../components/Modal';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'rgba(225,225,225,0.7)',
  }
}));

export function HomePage() {
  const classes = useStyles();
  const [pubList, setPubList] = useState([]);
  let location = useLocation();
  let background = location.pubList && location.pubList.background;


  useEffect(() => {
    axios
    .get('https://bucketlist-30-before-30.herokuapp.com/api/bucketlists/public/all')
    .then(res => {
      console.log('Huzzah! Public list data returned', res.data);
      setPubList(res.data);
    })
    .catch(err => {
      console.log('Public list data not returned', err)
    })
  },[]);
  return (
    <div className={classes.root}>
    Welcome to the Home Page
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {pubList.map(list => (
          <GridListTile key={list.id} cols={list.featured ? 3 : 1} rows={list.featured ? 2 : 1}>
            <Link 
              className={classes.link}
              to={{
                pathname: `/USERBUCKETLIST/${list.id}`,
                pubList: { background: location }
              }}>
              <img src={list.img} alt={list.title} />
              <GridListTileBar
                title={list.title}
                titlePosition="top"
                className={classes.titleBar}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
      {background && <Route path="/USERBUCKETLIST/:id" component={Modal} />}
    </div>
  );
}
