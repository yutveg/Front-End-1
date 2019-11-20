import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    const id = props.match.params.id;
    
    // useEffect(() => {
    //     axios 
    //     .get(`https://project-30-before-30.herokuapp.com/api/users/${id}`)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => console.log(err));
    // }, [id])

    return (
        <Link to="/" className="modal-cover">
             <div className="modal">
                 <div className="modal-img-container"></div>
                 <div className="modal-grid-container">
                     <div>
                         <img src="{userData.profileimg}" alt="User Headshot" />
                         <h2>John Shultz</h2>
                         <h2>Deadline: 10/10/10</h2>
                     </div>

                     <ul>
                         {/* {userData.bucketlist.map(item => (
                             <li>{item}</li>
                         ))} */}
                     </ul>
                 </div>
             </div>
         </Link>
    )
}

export default Modal;