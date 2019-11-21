import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'
import axios from 'axios'
const BucketItem = (props) => {
    console.log(props)
    const id = 2
    const idd = props.id

    const deleteItem = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`bucketlists/${id}/items/${idd}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err.message));
    }
    //const updateItem

    // const deleteFavorite = e => {
    //     e.preventDefault();
    //     // console.log({'"comment"':`${id}`})
    //     axiosWithAuth()
    //     // axios
    //     .delete(`https://salty-hackers.herokuapp.com/api/comments/${id}/deletefav`)
    //     .then(res => {
    //         console.log("Saved Res: ", res)
    //         window.location.reload(false)
    //     })
    //     .catch(err => console.log(err))
    // }

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <button onClick={deleteItem}>Complete</button> 
            {/*<button onClick={updateItem}>Update</button> */}
        </div>
    )
}

export default BucketItem;