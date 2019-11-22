import React, { useContext } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth'
import Context, {Consumer} from '../../contexts/context'

import decode from 'jwt-decode'
const BucketItem = props => {
    const context = useContext(Context) 

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

    return (
        <Consumer>
            {BucketItem => {
                const {name, description} = BucketItem
                return(
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <button onClick={deleteItem}>Complete</button> 
                    {/*<button onClick={updateItem}>Update</button> */}
                </div>
            )}}
        </Consumer>
    )
}

export default BucketItem;