import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BucketItem from './BucketItem.js';

const BucketList = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios 
        .get(`https://bucketlist-30-before-30.herokuapp.com/api/bucketlists/${props.id}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [])
    
    return (
        <ul>
        {props.list.map(p => (
          <li className="pokemon" key={p.name}>
            {p.name}
          </li>
        ))}
      </ul>
    )
}

export default BucketList;