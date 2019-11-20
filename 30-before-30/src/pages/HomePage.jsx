import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import Link from '@material-ui/core/Link';
// import tileData from './tileData';

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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background: 'rgba(225,225,225,0.7)',
  }
}));


export function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    Welcome to the Home Page
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {/* {tileData.map(tile => (
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
        ))} */}
      </GridList>
    </div>
  );
}
