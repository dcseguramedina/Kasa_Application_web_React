//Internal libraries
import React from 'react';

//Import styles
import './Rating.css';

function Rating({value}) { 

    const stars = [1,2,3,4,5];
    
    return (          
        <div className='rating'>
            {stars.map((star) => {
                return (
                    <div key={star.toString()} className={value >= star ? 'red_star' : 'grey_star'}></div>
                )
            })}      
        </div>          
    );      
}

export default Rating;