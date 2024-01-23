import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiGet, ApiPost } from "../components/api";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import Select from "react-select";
import {
  formatRupiah,
  handleCode,
  handleName,
  handleNumber,
  unformatRupiah,
} from "../util/regex";
import { notifyError, notifySuccess } from "../components/alert";

export default function ProductMasterAdd() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [sellingPrice, setSellingPrice] = useState(0);
  const [buyingPrice, setBuyingPrice] = useState(0);
  const [uom1, setUom1] = useState("");
  const [uom2, setUom2] = useState("");
  const [conv1To2, setConv1To2] = useState(0);
  const [companyDivisinOptions, setCompanyDivisinOptions] = useState([{}]);
  const [companyDivisionValue, setCompanyDivisionValue] = useState({
    label: "",
    value: 0,
  });
  const [productCategoryOptions, setProductCategoryOptions] = useState([]);
  const [productCategoryValue, setProductCategoryValue] = useState({
    label: "",
    value: 0,
  });
  const [productGroupOptions, setProductGroupOptions] = useState([{}]);
  const [productGroupValue, setProductGroupValue] = useState({
    label: "",
    value: 0,
  });
  useEffect(() => {
    fetchCompanyDivision();
  }, []);

  const fetchCompanyDivision = async () => {
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
    return setCompanyDivisinOptions(data);
  };

  const onChangeDivisionsSelect = async (data) => {
    fetchProductCategory(data.value);
    fetchProductGroup(data.value);
    setCompanyDivisionValue(data);
  };

  const fetchProductCategory = async (divisionID) => {
    const response = await ApiGet(
      uriMaster +
        `/productcategory?page=1&limit=-99&order_by=name ASC&filter=division_id eq ${divisionID}`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.code + " - " + item.name,
      value: item.id,
    }));
    return setProductCategoryOptions(data);
  };

  const fetchProductGroup = async (groupID) => {
    const response = await ApiGet(
      uriMaster +
        `/productgroup?page=1&limit=-99&order_by=name ASC&filter=division_id eq ${groupID}, level eq 3`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.code + " - " + item.name,
      value: item.id,
    }));
    return setProductGroupOptions(data);
  };

  const buttonSave = async () => {
    let reqBody = {
      division_id: companyDivisionValue.value,
      category_id: productCategoryValue.value,
      group_id: productGroupValue.value,
      code: code,
      name: name,
      selling_price: parseInt(unformatRupiah(sellingPrice)),
      buying_price: parseInt(unformatRupiah(buyingPrice)),
      uom_1: uom1,
      uom_2: uom2,
      conv1_to2: parseInt(conv1To2),
    };
    console.log(reqBody);
    const response = await ApiPost(`${uriMaster}/product`, reqBody, auth.token);

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
      navigate("/masterdata/product");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async () => {
    navigate("/masterdata/product");
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="division" className={styleLable}>
              Division
            </label>
            <Select
              id="division_id"
              options={companyDivisinOptions}
              onChange={onChangeDivisionsSelect}
              // value={subDistrictValue}
            />
            <div
              id="division_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="category" className={styleLable}>
              Product Category
            </label>
            <Select
              id="category_id"
              options={productCategoryOptions}
              onChange={setProductCategoryValue}
              // value={subDistrictValue}
            />
            <div
              id="category_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="group" className={styleLable}>
              Product Group
            </label>
            <Select
              id="group_id"
              options={productGroupOptions}
              onChange={setProductGroupValue}
              // value={subDistrictValue}
            />
            <div
              id="group_id_msg"
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
            <label htmlFor="selling_price" className={styleLable}>
              Selling Price
            </label>
            <input
              type="text"
              name="selling_price"
              id="selling_price"
              className={styleInput}
              value={sellingPrice}
              onChange={(e) => formatRupiah(e, setSellingPrice)}
            />
            <div
              id="selling_price_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="buying_price" className={styleLable}>
              Buying Price
            </label>
            <input
              type="text"
              name="buying_price"
              id="buying_price"
              className={styleInput}
              value={buyingPrice}
              onChange={(e) => formatRupiah(e, setBuyingPrice)}
            />
            <div
              id="buying_price_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="uom_1" className={styleLable}>
              Uom 1
            </label>
            <input
              type="text"
              name="uom_1"
              id="uom_1"
              className={styleInput}
              value={uom1}
              onChange={(e) => handleCode(e, setUom1)}
            />
            <div
              id="uom_1_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="uom_2" className={styleLable}>
              Uom 2
            </label>
            <input
              type="text"
              name="uom_2"
              id="uom_2"
              className={styleInput}
              value={uom2}
              onChange={(e) => handleCode(e, setUom2)}
            />
            <div
              id="uom_2_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="conv1_to2" className={styleLable}>
              Convertion 1 to 2
            </label>
            <input
              type="text"
              name="conv1_to2"
              id="conv1_to2"
              className={styleInput}
              value={conv1To2}
              onChange={(e) => handleNumber(e, setConv1To2)}
            />
            <div
              id="conv1_to2_msg"
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
