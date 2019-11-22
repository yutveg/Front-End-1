import { createContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import decode from 'jwt-decode'





export const CurrentUserContext = createContext(undefined)
export const CurrentUserProvider = CurrentUserContext.Provider
export const CurrentUserConsumer = CurrentUserContext.Consumer



const token  = localStorage.getItem('token')
const decoded = decode(token)
const ITEM_DATA = []
const getBuckets = ITEM_DATA => {
  axiosWithAuth()
  .get(`bucketlists/${decoded.id}/`,)
  .then(res => {
    console.log(res)
    ITEM_DATA = res.data
    return ITEM_DATA
  })
  .catch(err => console.log(err.response));
  console.log(ITEM_DATA)
}
getBuckets();




const ItemsContext = createContext(ITEM_DATA)
export const ItemsContextProvider = ItemsContext.Provider
export const ItemsContextConsumer = ItemsContext.Consumer
export default  ItemsContext

