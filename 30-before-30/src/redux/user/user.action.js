import Axios from "axios";
import { UserActionTypes } from './user.reducer'

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

export const userLoading = () => ( 
  console.log('loading'),
  {type: FETCH_USER_LOADING });


export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})
export const userLoadSuccess = data => (
  console.log('load Success'),
  {type: FETCH_USER_SUCCESS,
  payload: data
});


export function fetchUser(id) {
  return function(dispatch) {
    dispatch(userLoading());
    return(fetch(`https://project-30-before-30.herokuapp.com/api/users/${id}`)
      .then(res => {
          console.log(res);
          dispatch(userLoadSuccess(res.results))
      })
      .catch(err => console.log(err)))
  }
}