import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ApiGet, ApiPut } from "../components/api";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import Select from "react-select";
import { handleCode } from "../util/regex";
import { notifyError, notifySuccess } from "../components/alert";

export default function CompanyEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);

  const [code, setCode] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const [companyProfileOptions, setCompanyProfileOptions] = useState([{}]);
  const [companyProfileValue, setCompanyProfileValue] = useState(null);

  useEffect(() => {
    fetchDetail();
    fetchCompanyProfile();
  }, []);

  const fetchDetail = async () => {
    const response = await ApiGet(`${uriMaster}/company/${id}`, auth.token);
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data;
    console.log(data);
    setCode(data.code);
    setCompanyProfileValue({
      label: data.npwp + " - " + data.name,
      value: data.company_profile_id,
    });
    setUpdatedAt(data.updated_at);
    return;
  };

  const fetchCompanyProfile = async () => {
    const response = await ApiGet(
      uriMaster + `/companyprofile?page=1&limit=-99&order_by=name ASC`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.npwp + " - " + item.name,
      value: item.id,
    }));
    return setCompanyProfileOptions(data);
  };

  const buttonSave = async () => {
    let reqBody = {
      id: parseInt(id),
      company_profile_id: companyProfileValue.value,
      code: code,
      updated_at: updatedAt,
    };
    const response = await ApiPut(`${uriMaster}/company`, reqBody, auth.token);
    console.log("response -> ", response);

    if (response.payload.status.detail !== null) {
      const myObject = response.payload.status.detail;
      console.log(myObject);
      Object.keys(myObject).map((key, index) => {
        console.log(`key -> ${key}, value -> ${myObject[key]}`);
        let elementInput = document.getElementById(key);
        if (elementInput) {
          elementInput.className += " border-2 border-rose-500 rounded-md";
        }
        let elemenetMsg = document.getElementById(key + "_msg");
        if (elemenetMsg) {
          elemenetMsg.className =
            "text-xs text-rose-500 pointer-events-none opacity-100";
          elemenetMsg.innerHTML = myObject[key];
        }
      });
    }

    if (response.status === 400) {
      notifyError(response.payload.status.message);
      return;
    }

    if (response.status === 200) {
      notifySuccess(response.payload.status.message);
      navigate("/admin/company");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async () => {
    navigate("/admin/company");
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="company_profile" className={styleLable}>
              Company Profile
            </label>
            <Select
              id="company_profile_id"
              options={companyProfileOptions}
              onChange={setCompanyProfileValue}
              value={companyProfileValue}
              // defaultValue={companyProfileValue}
            />
            <div
              id="company_profile_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="code" className={styleLable}>
              Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              className={styleInput}
              value={code}
              onChange={(e) => handleCode(e, setCode)}
            />
            <div
              id="code_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
        </div>
        <div className="flex mt-5">
          <div>
            <button
              className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
              onClick={buttonSave}
            >
              Save
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
