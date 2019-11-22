import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Modal from '../components/Modal';

const OpenModal = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;
  return (
    <div className={modal ? "modal" : undefined}>
      {modal && <Link to="/">Close</Link>}
      <Modal />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 300,
    width: '100%',
    margin: '5vw',
  },
  image: {
    position: 'relative',
    height: 400,
    width: '25vw',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    textDecoration: 'none',
    letterSpacing: '2px',
    color: 'white',
    fontWeight: '700',
    fontSize: '2em',    
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export function HomeTile(props) {
  const classes = useStyles();

  const [pubList, setPubList] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
    .get('https://project-30-before-30.herokuapp.com/api/bucketlists/public/all')
    .then(res => {
      console.log('Huzzah! Public list data returned', res.data);
      setPubList(res.data);
    })
    .catch(err => {
      console.log('Public list data not returned', err)
    })
  },[pubList]);

  return (
    <div className={classes.root}>
      {pubList.map(list => (
        <Link to ={`/home/${list.user_id}`}
        className="link"
        >
        <ButtonBase
          focusRipple
          key={list.user_id}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: list.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: 'url("https://source.unsplash.com/collection/8934471/1600x900")',
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {list.user_id}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        </Link>
      ))}
            {/* <Route path="/:user_id" component={OpenModal} /> */}
    </div>
  );
}