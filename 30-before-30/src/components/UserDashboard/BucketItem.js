import React from 'react';

const BucketItem = (props) => {
    
    return (
         <div>
             <h2>{props.item}</h2>
             <p>{props.comment}</p>
         </div>
    )
}

export default BucketItem;