import { createContext } from 'react'


const Context = createContext({})
export const Provider = Context.Provider
export const Consumer = Context.Consumer
export default Context

// const getBuckets = ITEM_DATA => {
//   axiosWithAuth()
//   .get(`bucketlists/${decoded.id}/`,)
//   .then(res => {
//     console.log(res)
//     ITEM_DATA = res.data
//     return ITEM_DATA
//   })
//   .catch(err => console.log(err.response));
//   console.log(ITEM_DATA)
// }
// getBuckets();





