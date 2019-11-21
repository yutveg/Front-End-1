import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'
const BucketItem = (props) => {
    console.log(props)
    console.log(props.name)
    const id = 2
    const idd = props.id

    //'https://project-30-before-30.herokuapp.com/api/bucketlists/id/items/idd'
    const deleteItem = () => {
        axiosWithAuth()
        .delete(`bucketlists/${id}/items/${idd}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err.message));

    }
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <button onClick={deleteItem}>Complete</button> 
        </div>
    )
}

export default BucketItem;