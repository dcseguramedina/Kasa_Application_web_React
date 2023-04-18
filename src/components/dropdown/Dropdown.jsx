//Internal libraries
import React from 'react';
import { useState } from 'react';

//Import styles
import './Dropdown.css';

function Dropdown({ title, content }) {
    
  const [dropdown, setDropdown] = useState(false);

  const handleclick = () => {
    setDropdown(!dropdown)
  }

  return (
    <div className='dropdown'>
      <div className='dropdown_title'>
        <h2 className='dropdown_title_text' >{title}</h2>
        <div className={dropdown ? 'dropdown_title_vector_up' : 'dropdown_title_vector_down'} onClick={handleclick}></div>
      </div>
      <div className={dropdown ? 'dropdown_content' : 'dropdown_content_hidden'}>
        <p className='dropdown_content_text'>{content}</p>
      </div>
    </div>
  );
}

export default Dropdown;