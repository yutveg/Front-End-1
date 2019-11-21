import Axios from "axios";
import { ItemActionTypes } from './items.reducer'

export const FETCH_ITEM_LOADING = "FETCH_ITEM_LOADING";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILED = "FETCH_ITEM_FAILED";

export const itemLoading = () => ( 
  console.log('loading'),
  {type: FETCH_ITEM_LOADING });


export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})
export const itemLoadSuccess = data => (
  console.log('load Success'),
  {type: FETCH_ITEM_SUCCESS,
  payload: data
});


export function fetchItem(id) {
  return function(dispatch) {
    dispatch(itemLoading());
    return(fetch(`https://project-30-before-30.herokuapp.com/api/bucketlists/${userId}/items/${itemId}`)
      .then(res => {
          console.log(res);
          dispatch(itemLoadSuccess(res.results))
      })
      .catch(err => console.log(err)))
  }
}