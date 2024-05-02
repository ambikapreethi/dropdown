import React, { useState } from 'react';

function Dropdown({options})
{
    
  const [selectedOption, setSelectedOption] = useState("null");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
        <option>Select an option</option>
        {options.map((option) => (
          <option value={option}>
            {option}
          </option>
        ))}
            
      </select>
    </div>
  );
};

export default Dropdown;
