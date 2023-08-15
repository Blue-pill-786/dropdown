import React, { useState } from 'react';
import './DropdownButton.css';

function DropdownButton({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : 'Select an option'}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li
              key={item.value}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownButton;
