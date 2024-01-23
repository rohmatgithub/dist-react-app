import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiGet, ApiPost } from "../components/api";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import Select from "react-select";
import { handleCode, handleName } from "../util/regex";
import { notifyError, notifySuccess } from "../components/alert";

export default function ProductGroupAdd() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [levelOptions, setLevelOptions] = useState([
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
  ]);
  const [level, setLevel] = useState(0);
  const [companyDivisinoOptions, setCompanyDivisinoOptions] = useState([{}]);
  const [companyDivisinoValue, setCompanyDivisinoValue] = useState(null);
  const [parentOptions, setParentOptions] = useState([{}]);
  const [parentValue, setParentValue] = useState(null);
  const [isDisableParent, setIsDisableParent] = useState(true);
  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    const response = await ApiGet(
      uriMaster + `/companydivision?page=1&limit=-99&order_by=name ASC`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.code + " - " + item.name,
      value: item.id,
    }));
    return setCompanyDivisinoOptions(data);
  };

  const fetchParent = async (level, divisionID) => {
    if (
      divisionID === undefined ||
      divisionID === null ||
      level === undefined ||
      level < 1
    ) {
      return;
    }
    const response = await ApiGet(
      uriMaster +
        `/productgroup?page=1&limit=-99&order_by=name ASC&filter=level eq ${
          level - 1
        }, division_id eq ${divisionID}`,
      auth.token
    );
    console.log("parent : ", response);
    if (response.payload.data === null) {
      setParentValue({
        label: "",
        value: 0,
      });
      return setParentOptions([
        {
          label: "",
          value: 0,
        },
      ]);
    }
    const data = response.payload.data.map((item) => ({
      label: item.code + " - " + item.name,
      value: item.id,
    }));
    return setParentOptions(data);
  };

  const onChangeCompanyDivision = async (data) => {
    setCompanyDivisinoValue(data);
    await fetchParent(level, data.value);
  };
  const onChangeLevel = async (data) => {
    setLevel(data.value);
    if (data.value > 1) {
      setIsDisableParent(false);
      await fetchParent(data.value, companyDivisinoValue.value);
    } else {
      setIsDisableParent(true);
    }
  };
  const buttonSave = async () => {
    let reqBody = {
      division_id: companyDivisinoValue.value,
      parent_id: parentValue === null ? 0 : parentValue.value,
      level: level,
      code: code,
      name: name,
    };
    const response = await ApiPost(
      `${uriMaster}/productgroup`,
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
      navigate("/masterdata/productgroup");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async () => {
    navigate("/masterdata/productgroup");
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="company_division" className={styleLable}>
              Division
            </label>
            <Select
              id="company_division_id"
              options={companyDivisinoOptions}
              onChange={onChangeCompanyDivision}
              // value={subDistrictValue}
            />
            <div
              id="company_division_id_msg"
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
          <div>
            <label htmlFor="name" className={styleLable}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={styleInput}
              value={name}
              onChange={(e) => handleName(e, setName, 200)}
            />
            <div
              id="name_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="name" className={styleLable}>
              Level
            </label>
            <Select
              id="level"
              options={levelOptions}
              onChange={onChangeLevel}
              styles={{
                control: (css) => ({
                  ...css,
                  width: 150,
                }),
                menu: ({ width, ...css }) => ({
                  ...css,
                  width: 150,
                  //   minWidth: "20%",
                }),
              }}
              // value={subDistrictValue}
            />
            <div
              id="level_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
        </div>
        <div>
          <label htmlFor="parent" className={styleLable}>
            Parent
          </label>
          <Select
            id="parent_id"
            options={parentOptions}
            onChange={setParentValue}
            isDisabled={isDisableParent}
            value={parentValue}
          />
          <div
            id="parent_id_msg"
            className="text-xs text-rose-500 pointer-events-none opacity-0"
          ></div>
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
