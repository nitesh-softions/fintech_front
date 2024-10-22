import React, { useState } from 'react';
import Select from 'react-select';

const ReactSelect = ({ options, isMulti = false, placeholder = "Select an option" }) => {
  // State to track selected option(s)
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle change in selection
  const handleChange = (option) => {
    setSelectedOption(option); // Update the state with the selected option(s)
    console.log('Selected option:', option); // You can use the selected value here
  };

  return (
    <>
      <Select
        className="w-100"
        value={selectedOption} // Bind selected value to the state
        onChange={handleChange} // Update state on change
        options={options} // Pass the options array
        placeholder={placeholder} // Placeholder for dropdown
        isClearable // Allows clearing the selection
        isMulti={isMulti} // Toggle between single and multi-select
      />
    </>
  );
};

export default ReactSelect;
