import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiGet, ApiPost } from "../components/api";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import Select from "react-select";
import { handleCode } from "../util/regex";
import { notifyError, notifySuccess } from "../components/alert";

export default function CompanyBranchAdd() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [code, setCode] = useState("");
  const [companyProfileOptions, setCompanyProfileOptions] = useState([{}]);
  const [companyProfileValue, setCompanyProfileValue] = useState(null);
  const [companyOptions, setCompanyOptions] = useState([{}]);
  const [companyValue, setCompanyValue] = useState(null);
  useEffect(() => {
    fetchCompanyProfile();
    fetchCompany();
  }, []);
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
  const fetchCompany = async () => {
    const response = await ApiGet(
      uriMaster + `/company?page=1&limit=-99&order_by=name ASC`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.code + " - " + item.name,
      value: item.id,
    }));
    return setCompanyOptions(data);
  };
  const buttonSave = async () => {
    let reqBody = {
      company_id: companyValue.value,
      company_profile_id: companyProfileValue.value,
      code: code,
    };
    const response = await ApiPost(
      `${uriMaster}/companybranch`,
      reqBody,
      auth.token
    );

    if (response.payload.status.detail !== null) {
      const myObject = response.payload.status.detail;
      Object.keys(myObject).map((key, index) => {
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
      return;
    }
    if (response.status === 400) {
      notifyError(response.payload.status.message);
      return;
    }

    if (response.status === 200) {
      notifySuccess(response.payload.status.message);
      navigate("/admin/companybranch");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async () => {
    navigate("/admin/companybranch");
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="company" className={styleLable}>
              Company
            </label>
            <Select
              id="company_id"
              options={companyOptions}
              onChange={setCompanyValue}
              // value={subDistrictValue}
            />
            <div
              id="company_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="company_profile" className={styleLable}>
              Company Profile
            </label>
            <Select
              id="company_profile_id"
              options={companyProfileOptions}
              onChange={setCompanyProfileValue}
              // value={subDistrictValue}
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
              s
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
