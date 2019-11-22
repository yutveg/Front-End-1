import React, { useState, useContext, useEffect } from 'react';
import Context, {Provider} from '../../contexts/context'
import axiosWithAuth from '../../utils/axiosWithAuth';
import BucketItem from './BucketItem'
import decode from 'jwt-decode'



const BucketList = () => {
  console.log('bucketlist')

  const context = useContext(Context) 
  const [bucket, setBucket] = useState([context.ITEM_DATA])
  const decoded = decode(context.token)
  console.log(bucket)
  console.log(context)

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




  console.log(bucket)
  return (
    <Provider value={{bucket}}>
      <ul>
        {bucket.map(b => (
        <li className="card" key={b.name}>
          <BucketItem />
        </li>
        ))} 
      </ul>
    </Provider>
  )
}


export default BucketList;