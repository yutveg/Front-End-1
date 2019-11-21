import React, { useState, useContext, useEffect } from 'react';
import ItemsContext from '../../contexts/items/items.contexts'


const BucketList = (props) => {
  const ItemList = useContext(ItemsContext)
  //const Item = Items[match.params.userId]
  console.log("Bucketlist", ItemList)
    const [list, setList] = useState([]);


    
    return (
        <ul>
        {ItemList.map(p => (
          <li className="card" key={p.name}>
            {p.description}
          </li>
        ))} 
      </ul>
    )
}


export default BucketList;