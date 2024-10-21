import React, { useState } from "react";
import Select from "react-select";

// Country code options with flag images
const countryCode = [
  {
    label: "Countries",
    options: [
      {
        label: "+91 India",
        value: "India",
        flag: "https://t3.ftcdn.net/jpg/06/12/34/84/360_F_612348476_k3i3brMUOo3N9Wk3yoceMHqZ8w4jpFqu.jpg",
      },
      {
        label: "+1 Canada",
        value: "Canada",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
      },
      {
        label: "+27 South Africa",
        value: "South Africa",
        flag: "https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg",
      },
    ],
  },
];



const CountrySelect = ({selectedCountry}) => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    
    const handleSelectGroup = (selectedGroup) => {
        setSelectedGroup(selectedGroup);
        selectedCountry(selectedGroup);
    };


    // Custom option component for react-select
    const CustomOption = ({ innerRef, innerProps, data, isFocused }) => (
      <div ref={innerRef} {...innerProps} className={`d-flex align-items-center ${ isFocused ? "bg-primary text-white" : "" }`} style={{ padding: "5px 12px", cursor: "pointer" }} >
        <img src={data.flag} alt="" width="25" height="25" className="me-2 rounded-circle" />
        <span>{data.label}</span>
        <div className="avatar-xxs ms-3"> <span className="avatar-title rounded-circle bg-danger text-white font-size-10"> {" "} 5{" "} </span> </div>
      </div>
    );
    
    // Custom single value component to show the selected flag in the dropdown
    const CustomSingleValue = ({ data }) => (
      <div className="d-flex align-items-center">
        <img src={data.flag} alt="" width="25" height="25" className="me-2 rounded-circle" />
        <span>{data.label}</span>
      </div>
    );

  return (
    <>
      <Select
        value={selectedGroup}
        onChange={handleSelectGroup}
        options={countryCode}
        className="bg-light mb-3 rounded-3 country-select-with-image"
        components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
        placeholder="Select Country"
      />
    </>
  );
};

export default CountrySelect;
