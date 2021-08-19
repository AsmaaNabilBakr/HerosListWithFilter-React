import React, { useEffect, useState } from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import FilterIcon from "../../Assets/Imgs/filter-results-button.svg";
import axios from "axios";
import { stringify } from "querystring";
import { isPropertySignature } from "typescript";
require("../styles.scss");

function FilterComponent(props: { filter: any }) {
  const [Countries, SetCountries] = useState([]);
  const [heroItem, SetheroItem] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    country: "",
    company: "",
  });

  useEffect(() => {
    fetchCountriesDate();
  }, []);

  const handleChange = (e: any) => {
    SetheroItem({ ...heroItem, [e.target.name]: e.target.value });
  };

  const fetchCountriesDate = async () => {
    axios
      .get("http://countryapi.gear.host/v1/Country/getCountries")
      .then((response) => {
        SetCountries(response.data.Response);
      });
  };

  return (
    <>
      <div className="filterContainer">
        <div className="filterHeader">Filters</div>
        <div className="filterForm">
          <MDBInput
            hint="Email"
            type="email"
            name="email"
            value={heroItem.email}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            hint="Phone"
            type="number"
            name="phone"
            value={heroItem.phone}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            hint="Full Name"
            type="text"
            name="name"
            value={heroItem.name}
            onChange={(e) => handleChange(e)}
          />
          <MDBInput
            hint="Company"
            type="text"
            name="company"
            value={heroItem.company}
            onChange={(e) => handleChange(e)}
          />
          <div className="countrySelect">
            <label> Country</label>
            <select
              className="browser-default custom-select"
              name="country"
              value={heroItem.country}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Choose Country</option>
              {Countries?.map((item: any) => (
                <option value={item.Alpha3Code} key={item.NumericCode}>
                  {item.Alpha3Code}
                </option>
              ))}
            </select>
          </div>
          <MDBInput
            label="Date"
            hint=" "
            type="date"
            name="date"
            value={heroItem.date}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="filterActionBtn" onClick={() =>props.filter(heroItem)}>
          <img src={FilterIcon} />
          Filter
        </button>
      </div>
    </>
  );
}

export default FilterComponent;
