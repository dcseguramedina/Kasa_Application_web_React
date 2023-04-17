//Internal libraries
import React from 'react';
import { useState } from 'react';

//Import styles
import './Carrousel.css';

function Carrousel({ pictures }) {
    
  const [index, setIndex] = useState(0);

  function handleClickLeft() {
    setIndex(index - 1);
  }

  function handleClickRight() {
    setIndex(index + 1);
  }

  return (
    <section className='carrousel'>
        <img className='carrousel_image' src="" alt="" />
        <div className='carrousel_vector_left' onClick={handleClickLeft}></div>
        <div className='carrousel_vector_right'onClick={handleClickRight}></div>
        <p className='carrousel_count'>({index + 1}/{pictures.length})</p>      
    </section>
  );
}

export default Carrousel;