import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApiGet } from "../components/api";
import { uriMaster } from "../constanta/constanta";

export default function CompanyProfileDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDetails = async () => {
      console.log(id);
      const response = await ApiGet(
        `${uriMaster}/companyprofile/${id}`,
        auth.token
      );
      console.log(response);
      setData(response.payload.data);
    };

    fetchDetails();
  }, []);

  return <div>companyProfileDetail</div>;
}
