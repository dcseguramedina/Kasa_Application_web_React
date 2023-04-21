// Internal libraries
import React from 'react';
import { useState } from 'react';

// Import styles
import './Dropdown.css';

// Create Dropdown component
export default function Dropdown({ title, content }) {
  // Use state variable to update position between renders
  const [dropdown, setDropdown] = useState(false);
  // Create functions to handle the change of position (close/open)
  function handleclick() {
    setDropdown(!dropdown)
  }

  return (
    <section className='dropdown'>
      <div className='dropdown_title'>
        <h2 className='dropdown_title_text' >{title}</h2>
        <div className={dropdown ? 'dropdown_title_vector_up' : 'dropdown_title_vector_down'} onClick={handleclick}></div>
      </div>
      <div className={dropdown ? 'dropdown_content' : 'dropdown_content_hidden'}>
        {Array.isArray(content) ? 
          (<ul className='dropdown_content_list'>
            {content.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })}
          </ul>) 
          : 
          (<p className='dropdown_content_text'>{content}</p>)}
      </div>
    </section>
  );
}