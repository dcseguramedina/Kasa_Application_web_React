// Internal libraries
import React from 'react';

// Import styles
import './Rating.css';

// Create Rating component
export default function Rating({value}) { 
    // Create an array with the number of start to display in order to conditionally render the rating value 
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