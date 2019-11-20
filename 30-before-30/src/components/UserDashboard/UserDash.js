import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BucketItem from './BucketItem.js';
import uhm from '../../assets/uhm.jpg';
import testphotoforapp from '../../assets/testphotoforapp.jpg';
const UserDash = (props) => {
    const id = props.match.params.id;
    
    useEffect(() => {
        axios 
        .get(`https://bucketlist-30-before-30.herokuapp.com/api/bucketlists/1`)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }, [id])

    return (
         <div className="user-dash-wrapper">
             <div className="user-dash-img"><img src={testphotoforapp} alt="User Header" /></div>
             <div className="user-dash-grid-container">
                 <div>
                     <img className="prof-pic" src={uhm} alt="User Headshot" />
                     <h1>John Shultz</h1>
                 </div>

                 <ul>
                     <li>FILLERFILLERFILLER</li>
                     <li>FILLERFILLERFILLER</li>
                     <li>FILLERFILLERFILLER</li>
                     <li>FILLERFILLERFILLER</li>
                     {/* {userData.bucketlist.map(item => (
                         <li>{item}</li>
                     ))} */}
                 </ul>
             </div>
             <button className="user-dash-button">ADD BUCKETLIST ITEM</button>
         </div>
    )
}

export default UserDash;