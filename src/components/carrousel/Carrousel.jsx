// Internal libraries
import React from 'react';
import { useState } from 'react';

// Import styles
import './Carrousel.css';

// Create Carrousel component
function Carrousel({ title, pictures }) {
  // Use state variable to update image between renders
  const [index, setIndex] = useState(0);
  // Create functions to handle the change of image (left/right)
  const handleClickLeft = () => {
    setIndex(index - 1);
    if(index === 0) {
      setIndex(pictures.length - 1)
    }  
  }

  const handleClickRight = () => {
    setIndex(index + 1);
    if(index === pictures.length - 1) {
      setIndex(0)
    }      
  }

  return (
    <section className='carrousel'>
        <img className='carrousel_image' src={pictures[index]} alt={title} />
        {pictures.length > 1 &&
          <>
          <div className='carrousel_vector_left' onClick={handleClickLeft}></div>
          <div className='carrousel_vector_right'onClick={handleClickRight}></div>
          <p className='carrousel_count'>({index + 1}/{pictures.length})</p>
          </>
        }              
    </section>
  );
}

export default Carrousel;