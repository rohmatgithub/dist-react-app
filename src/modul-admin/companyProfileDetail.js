import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ApiGet } from "../components/api";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";

export default function CompanyProfileDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await ApiGet(
        `${uriMaster}/companyprofile/${id}`,
        auth.token
      );
      setData(response.payload.data);
    };

    fetchDetails();
  }, []);

  const buttonEdit = (e) => {
    e.preventDefault();
    navigate("/admin/companyprofile/edit/" + id);
  };
  const buttonCancel = (e) => {
    e.preventDefault();
    navigate("/admin/companyprofile");
  };
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        {/* <div className="text-black text-20 max-md:max-w-full">
          Detail
        </div> */}
        <div>
          <div>
            <label htmlFor="npwp" className={styleLable}>
              NPWP
            </label>
            <div className={styleInput}>{data.npwp}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Name
            </label>
            <div className={styleInput}>{data.name}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Country
            </label>
            <div className={styleInput}>{data?.country?.name}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Province
            </label>
            <div className={styleInput}>{data?.province?.name}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              District
            </label>
            <div className={styleInput}>{data?.district?.name}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Sub District
            </label>
            <div className={styleInput}>{data?.sub_district?.name}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Urban Village
            </label>
            <div className={styleInput}>{data?.urban_village?.name}</div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Address
            </label>
            <div className={styleInput}>{data?.address_1}</div>
          </div>
        </div>
        <div className="flex mt-5">
          <div>
            <button
              className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
              onClick={buttonEdit}
            >
              Edit
            </button>
          </div>
          <div className="ml-5">
            <button
              className="bg-gray-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
              onClick={buttonCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
