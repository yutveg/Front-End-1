import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'


const BucketList = (props) => {
  console.log("Bucketlist",props)
    const [list, setList] = useState([]);


    
    return (
        <ul>
        {/* {props.list.map(p => (
          <li className="pokemon" key={p.name}>
            {p.name}
          </li>
        ))} */}
      </ul>
    )
}


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
