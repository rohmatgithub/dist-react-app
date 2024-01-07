import { useDispatch, useSelector } from "react-redux";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import { ApiGet, ApiPost } from "../components/api";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function CompanyProfileAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  let valueOptions = {
    label: "",
    value: 0,
  };

  const [npwp, setNpwp] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [countryOptions, setCountryOptions] = useState([{}]);
  const [provinceOptions, setProvinceOptions] = useState([{}]);
  const [districtOptions, setDistrictOptions] = useState([{}]);
  const [subDistrictOptions, setSubDistrictOptions] = useState([{}]);
  const [urbanVillageOptions, setUrbanVillageOptions] = useState([{}]);
  const [countryValue, setCountryValue] = useState(valueOptions);
  const [provinceValue, setProvinceValue] = useState(valueOptions);
  const [districtValue, setDistrictValue] = useState(valueOptions);
  const [subDistrictValue, setSubDistrictValue] = useState(valueOptions);
  const [urbanVillageValue, setUrbanVillageValue] = useState(valueOptions);

  const [errorNpwp, setErrorNpwp] = useState("");

  useEffect(() => {
    fetchCountry();
  }, []);
  useEffect(() => {
    if (countryValue.value === 0) {
      return;
    }
    fetchProvince();
  }, [countryValue.value]);

  useEffect(() => {
    if (provinceValue.value === 0) {
      return;
    }
    fetchDistrict();
    setDistrictValue(valueOptions);
    setSubDistrictValue(valueOptions);
    setUrbanVillageValue(valueOptions);
  }, [provinceValue.value]);

  useEffect(() => {
    if (districtValue.value === 0) {
      return;
    }
    fetchSubDistrict();
    setSubDistrictValue(valueOptions);
    setUrbanVillageValue(valueOptions);
  }, [districtValue.value]);

  useEffect(() => {
    if (subDistrictValue.value === 0) {
      return;
    }
    fetchUrbanVillage();
    setUrbanVillageValue(valueOptions);
  }, [subDistrictValue.value]);

  const fetchCountry = async () => {
    const response = await ApiGet(
      uriMaster + "/country?page=1&limit=-99&order_by=name ASC",
      auth.token
    );
    if (response.statusCode === 401) {
      dispatch({
        type: "LOGOUT",
      });
      navigate("/");
    }
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return setCountryOptions(data);
  };

  const fetchProvince = async () => {
    const response = await ApiGet(
      uriMaster +
        `/province?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${countryValue.value}`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return setProvinceOptions(data);
  };

  const fetchDistrict = async () => {
    const response = await ApiGet(
      uriMaster +
        `/district?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${provinceValue.value}`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return setDistrictOptions(data);
  };
  const fetchSubDistrict = async () => {
    const response = await ApiGet(
      uriMaster +
        `/subdistrict?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${districtValue.value}`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return setSubDistrictOptions(data);
  };
  const fetchUrbanVillage = async () => {
    const response = await ApiGet(
      uriMaster +
        `/urbanvillage?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${subDistrictValue.value}`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.name,
      value: item.id,
    }));
    return setUrbanVillageOptions(data);
  };

  const handleChange = (event) => {
    let value = event.target.value;
    // Hanya ambil angka
    value = value.replace(/[^0-9]/g, "");
    // Batasi panjang input hingga 16 digit
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    setNpwp(value);
  };
  const buttonSave = async () => {
    let reqBody = {
      name: name,
      npwp: npwp,
      address_1: address,
      country_id: countryValue.value,
      province_id: provinceValue.value,
      district_id: districtValue.value,
      sub_district_id: subDistrictValue.value,
      urban_village_id: urbanVillageValue.value,
    };
    const response = await ApiPost(
      `${uriMaster}/companyprofile`,
      reqBody,
      auth.token
    );
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
    if (response.status === 200) {
      navigate("/admin/companyprofile");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async () => {
    navigate("/admin/companyprofile");
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      {/* <div className="text-black text-4xl leading-6 mr-4 mb-10 max-md:max-w-full max-md:mr-2.5">
        Company Profile
      </div> */}

      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="npwp" className={styleLable}>
              NPWP
            </label>
            <input
              type="text"
              name="npwp"
              id="npwp"
              s
              className={styleInput}
              value={npwp}
              onChange={handleChange}
            />
            <div
              id="npwp_msg"
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
              onChange={(e) => setName(e.target.value)}
            />
            <div
              id="name_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="country" className={styleLable}>
              Country
            </label>
            <Select
              //   className="border-2 border-rose-500 rounded-md"
              id="country_id"
              options={countryOptions}
              onChange={setCountryValue}
              value={countryValue}
            />
            <div
              id="country_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="province" className={styleLable}>
              Province
            </label>
            <Select
              id="province_id"
              options={provinceOptions}
              onChange={setProvinceValue}
              value={provinceValue}
            />
            <div
              id="province_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="district" className={styleLable}>
              District
            </label>
            <Select
              id="district_id"
              options={districtOptions}
              onChange={setDistrictValue}
              value={districtValue}
            />
            <div
              id="district_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="subdistrict" className={styleLable}>
              Sub District
            </label>
            <Select
              id="sub_district_id"
              options={subDistrictOptions}
              onChange={setSubDistrictValue}
              value={subDistrictValue}
            />
            <div
              id="sub_district_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="uv" className={styleLable}>
              Urban Village
            </label>
            <Select
              id="urban_village_id"
              options={urbanVillageOptions}
              onChange={setUrbanVillageValue}
              value={urbanVillageValue}
            />
            <div
              id="urban_village_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="address" className={styleLable}>
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address_1"
              className={styleInput}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div
              id="address_1_msg"
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
