import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { countryList } from "../../store/actions";
import { createSelector } from "@reduxjs/toolkit";

const CountrySelect = ({ selectedCountry }) => {
  const dispatch = useDispatch();
  const [selectedGroup, setSelectedGroup] = useState(null);

  // Dispatch the action to fetch countries on component load
  useEffect(() => {
    dispatch(countryList());
  }, [dispatch]);

  // Selector to extract country data from Redux
  const selectCountryState = (state) => state.countryReducer;
  const CountryProperties = createSelector(
    selectCountryState,
    (country) => ({
      countries: country.countries,
    })
  );

  const { countries } = useSelector(CountryProperties);

  // Parse countries data and format it for react-select
  const countryOptions = countries
    ? JSON.parse(countries).map((country) => ({
        label: `${country.isdcode} ${country.name}`,
        value: country.name,
        code: country.isdcode,
        flag: country.country_flag,
      }))
    : [];

  const handleSelectGroup = (selectedGroup) => {
    setSelectedGroup(selectedGroup);
    selectedCountry(selectedGroup);
  };

  // Custom option component for react-select
  const CustomOption = ({ innerRef, innerProps, data, isFocused }) => (
    <div ref={innerRef} {...innerProps} className={`d-flex align-items-center justify-content-between ${ isFocused ? "bg-primary text-white" : "" }`} style={{ padding: "5px 12px", cursor: "pointer" }} >
      <div>
        <img src={data.flag} alt="" width="25" height="25" className="me-2 rounded-circle" />
        <span>{data.label}</span>
      </div>
    </div>
  );

  // Custom single value component to show the selected flag in the dropdown
  const CustomSingleValue = ({ data }) => (
    <div className="d-flex align-items-center">
      <img src={data.flag} alt="" width="25" height="25" className="me-2 rounded-circle shadow-lg" />
      <span className="ellipsis-1">{data.label}</span>
    </div>
  );

  return (
    <>
      <Select
        value={selectedGroup}
        onChange={handleSelectGroup}
        options={countryOptions}
        className="bg-light rounded-3 country-select-with-image"
        components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
        placeholder="Select Country*"
      />
    </>
  );
};

export default CountrySelect;
