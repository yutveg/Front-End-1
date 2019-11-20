import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BucketList from './BucketList.js';
import uhm from '../../assets/uhm.jpg';
import testphotoforapp from '../../assets/testphotoforapp.jpg';
import { Link, Route } from 'react-router-dom'
import AddItemForm from './AddItemForm.js';

const UserDash = (props) => {
    const [user, setUser] = useState({
        displayname: '',
    });

    const id = props.match.params.id;

    useEffect(() => {
        axios
        .get(`https://bucketlist-30-before-30.herokuapp.com/api/users/${id}`)
        .then(res => {
            console.log(res.data);
            setUser(res.data);
        })
        .catch(err => {console.log(err)})
    }, [])

    const handleSubmit = () => {
        axios
        .put(`https://bucketlist-30-before-30.herokuapp.com/api/bucketlists/${id}`, true)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
         <div className="user-dash-wrapper">
             <div className="user-dash-img"><img src={testphotoforapp} alt="User Header" /></div>
             <button onClick={handleSubmit} className="public-button">PUBLIC</button>
             <div className="user-dash-grid-container">
                 <div>
                     <img className="prof-pic" src={uhm} alt="User Headshot" />
                     <h1>{user.displayname}</h1>
                 </div>
                 
                 <BucketList id={id} />
             </div>
             <Route path={`/user/${id}/additem`} render={props => <AddItemForm id={id} /> } />
             <Link to={`/user/${id}/additem`} className="user-dash-button">ADD BUCKETLIST ITEM</Link>
         </div>
    )
}

export default UserDash;