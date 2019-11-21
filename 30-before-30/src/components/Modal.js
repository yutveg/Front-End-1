import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uhm from '../assets/uhm.jpg';
import BucketList from './UserDashboard/BucketList.js';

const Modal = (props) => {
    const [user, setUser] = useState({
        displayname: '',
    });

    const id = props.match.params.id;
    
    useEffect(() => {
        axios 
        .get(`https://project-30-before-30.herokuapp.com/api/users/${id}`)
        .then(res => {
            console.log(res);
            setUser(res.data);
        })
        .catch(err => console.log(err));
    }, [id])

    return (
      <div className="modal">
        <div className="modal-img-container"></div>
        <div className="modal-grid-container">
          <div>
            <img src={uhm} alt="User Headshot" className="prof-pic" />
            <h2>{user.displayname}</h2>
          </div>

          <BucketList id={id} list={[1,2,3]}/>
        </div>
      </div>
    )
}

export default Modal;