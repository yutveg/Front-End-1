import React, { useState, useContext, useEffect } from 'react';
import ItemsContext from '../../contexts/context'
import axiosWithAuth from '../../utils/axiosWithAuth';
import BucketItem from './BucketItem'
import decode from 'jwt-decode'



const BucketList = () => {
  //const [CurrentUserContext, setCurrentUserContext] = useState(null)
  const [bucket, setBucket] = useState([])
  const token  = localStorage.getItem('token')
  const decoded = decode(token)
  console.log(decoded)
  const ItemLists = useContext(ItemsContext);
  const ItemList = ItemLists[matchMedia.params.BucketListId]
  // const { }
  console.log(ItemsContext)
  useEffect(() => {
    const getBuckets = () => {
      axiosWithAuth()
    .get(`bucketlists/${decoded.id}/`,)
    .then(res => {
      console.log(res)
      setBucket(res.data)
    })
    .catch(err => console.log(err.response));
    }
    getBuckets();


    //setCurrentUserContext()
  }, [decoded.id]);




  console.log(bucket.length ?bucket: null)
  return (
    <ItemsContext.Provider value={{bucket}}>
      <ul>
        {bucket.map(b => (
        <li className="card" key={b.name}>
          <BucketItem name={b.name} id={b.id} description={b.description}/>
        </li>
        ))} 
      </ul>
    </ItemsContext.Provider>
  )
}


export default BucketList;