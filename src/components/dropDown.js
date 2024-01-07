import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { ApiGet } from "./api";
import { uriMaster } from "../constanta/constanta";
import { useSelector } from "react-redux";

const Dropdown = (props) => {
  const [options, setOptions] = useState([]);
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = ApiGet(props.url, auth.token); // Replace 'API_URL' with the actual API endpoint
        const data = response.payload.data.map((item) => ({
          label: item.name,
          value: item.id,
        })); // Map the data to the format required by react-select
        setOptions(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  return <Select options={options} onChange={props.handleChange} />;
};

export default Dropdown;
