import React, { useEffect } from 'react';
import axios from 'axios';

const BucketList = (props) => {

    useEffect(() => {
        axios 
        .get(`https://bucketlist-30-before-30.herokuapp.com/api/bucketlists`)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [])
    
    return (
        <ul>
            
        </ul>
    )
}

export default BucketList;