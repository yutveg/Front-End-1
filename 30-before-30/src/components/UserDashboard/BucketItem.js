import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'
import decode from 'jwt-decode'
const BucketItem = (props) => {
    const idd = props.id
    const token  = localStorage.getItem('token')
    const decoded = decode(token)
    //console.log(decoded)

    const deleteItem = () => {
        axiosWithAuth()
        .delete(`bucketlists/${decoded.id}/items/${idd}`)
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