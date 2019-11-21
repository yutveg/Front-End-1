import React, { useState, useContext, useEffect } from 'react';
import ItemsContext from '../../contexts/items/items.contexts'
import axiosWithAuth from '../../utils/axiosWithAuth';
import BucketItem from './BucketItem'


const BucketList = () => {
  const [CurrentUserContext, setCurrentUserContext] = useState(null)
  const [bucket, setBucket] = useState([])
  const id = 2

  useEffect(() => {
    const getBuckets = () => {
      axiosWithAuth()
    .get(`bucketlists/${id}/`)
    .then(res => {
      setBucket(res.data)
    })
    .catch(err => console.log(err));
    }
    getBuckets();


    setCurrentUserContext()
  }, []);




  console.log(bucket)
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