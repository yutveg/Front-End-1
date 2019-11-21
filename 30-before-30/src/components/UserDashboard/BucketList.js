import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'


const BucketList = (props) => {
  console.log("Bucketlist",props)
    const [list, setList] = useState([]);


    
    return (
        <ul>
        {props.list.map(p => (
          <li className="card" key={p.name}>
            {p}
          </li>
        ))} 
      </ul>
    )
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
