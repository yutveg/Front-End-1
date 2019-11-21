import React, { useState, useContext, useEffect } from 'react';
import ItemsContext from '../../contexts/items/items.contexts'
import axiosWithAuth from '../../utils/axiosWithAuth';


const BucketList = (props) => {
  //const Item = Items[match.params.userId]
  const [bucket, setBucket] = useState([])
  const id = 2

  useEffect(() => {
    const getBuckets = () => {
      axiosWithAuth()
    .get(`bucketlists/${id}/`)
    .then(res => {
      console.log(res.data);
      setBucket(res.data)
    })
    .catch(err => console.log(err));
    }
    getBuckets();
  }, []);




  // axiosWithAuth()
  //   .get(`bucketlists/${id}/`)
  //   .then(res => {
  //     console.log(res.data);
  //     setBucket(res.data)
  //   },[])
  //   .catch(err => console.log(err));
  console.log(bucket)
      
  const ItemList = useContext(bucket)

  console.log("Bucketlist", ItemList)
    const [list, setList] = useState([]);


    
    return (
        <ul>
        {bucket.map(p => (
          <li className="card" key={p.name}>
            {p.description}
          </li>
        ))} 
      </ul>
    )
}


export default BucketList;