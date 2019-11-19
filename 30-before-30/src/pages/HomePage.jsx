import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from '@material-ui/core/Link';

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
  const [listTile, setListTile] = useState([]);


  useEffect(() => {
    axios
    .get('https://bucketlist-30-before-30.herokuapp.com/api/bucketlists/public/all')
    .then(res => {
      console.log('Huzzah! Public list data returned', res.data);
      setListTile(res.data);
    })
    .catch(err => {
      console.log('Public list data not returned', err)
    })
  },[]);
  return (
    <div className={classes.root}>
    Welcome to the Home Page
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {listTile.map(tile => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <Link href="#" className={classes.link}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                className={classes.titleBar}
              />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
