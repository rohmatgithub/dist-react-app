import { useDispatch, useSelector } from "react-redux";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import { ApiGet, ApiPut } from "../components/api";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { notifyError, notifySuccess } from "../components/alert";

export default function CompanyProfileEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  let valueOptions = {
    label: "",
    value: 0,
  };

  const [updatedAt, setUpdatedAt] = useState("");
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

  const fetchPrepareData = async () => {
    const response = await ApiGet(
      `${uriMaster}/companyprofile/${id}`,
      auth.token
    );

    const content = response?.payload?.data;
    setNpwp(content.npwp);
    setName(content.name);
    setAddress(content.address_1);
    setUpdatedAt(content.updated_at);
    setCountryValue({
      label: content.country.name,
      value: content.country.id,
    });

    setProvinceValue({
      label: content.province.name,
      value: content.province.id,
    });

    setDistrictValue({
      label: content.district.name,
      value: content.district.id,
    });

    setSubDistrictValue({
      label: content.sub_district.name,
      value: content.sub_district.id,
    });

    setUrbanVillageValue({
      label: content.urban_village.name,
      value: content.urban_village.id,
    });

    fetchCountry();
    fetchProvince(content.country.id);
    fetchDistrict(content.province.id);
    fetchSubDistrict(content.district.id);
    fetchUrbanVillage(content.sub_district.id);
  };

  useEffect(() => {
    fetchPrepareData();
  }, []);

  const onChangeCountry = (e) => {
    if (e.value === 0) {
      return;
    }
    setCountryValue(e);
    fetchProvince(e.value);
  };

  const onChangeProvince = (e) => {
    if (e.value === 0) {
      return;
    }
    setProvinceValue(e);
    fetchDistrict(e.value);
    setDistrictValue(valueOptions);
    setSubDistrictValue(valueOptions);
    setUrbanVillageValue(valueOptions);
  };

  const onChangeDistrict = (e) => {
    if (e.value === 0) {
      return;
    }
    setDistrictValue(e);
    fetchSubDistrict(e.value);
    setSubDistrictValue(valueOptions);
    setUrbanVillageValue(valueOptions);
  };

  const onChangeSubDistrict = (e) => {
    if (e.value === 0) {
      return;
    }
    setSubDistrictValue(e);
    fetchUrbanVillage(e.value);
    setUrbanVillageValue(valueOptions);
  };

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

  const fetchProvince = async (countryID) => {
    const response = await ApiGet(
      uriMaster +
        `/province?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${countryID}`,
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

  const fetchDistrict = async (provinceID) => {
    const response = await ApiGet(
      uriMaster +
        `/district?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${provinceID}`,
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
  const fetchSubDistrict = async (districtID) => {
    const response = await ApiGet(
      uriMaster +
        `/subdistrict?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${districtID}`,
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
  const fetchUrbanVillage = async (subDistrictID) => {
    const response = await ApiGet(
      uriMaster +
        `/urbanvillage?page=1&limit=-99&order_by=name ASC&filter=parent_id eq ${subDistrictID}`,
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
      id: parseInt(id, 10),
      name: name,
      npwp: npwp,
      address_1: address,
      country_id: countryValue.value,
      province_id: provinceValue.value,
      district_id: districtValue.value,
      sub_district_id: subDistrictValue.value,
      urban_village_id: urbanVillageValue.value,
      updated_at: updatedAt,
    };

    console.log("updated_at: ", updatedAt);
    const response = await ApiPut(
      `${uriMaster}/companyprofile`,
      reqBody,
      auth.token
    );

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
      navigate("/admin/companyprofile");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async (e) => {
    e.preventDefault();
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
              value={name}
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
              onChange={onChangeCountry}
              value={countryValue}
              defaultValue={countryValue}
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
              onChange={onChangeProvince}
              value={provinceValue}
              defaultValue={provinceOptions.find(
                (option) => option.value === provinceValue
              )}
              //   defaultValue={provinceValue}
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
              onChange={onChangeDistrict}
              value={districtValue}
              defaultValue={districtValue}
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
              onChange={onChangeSubDistrict}
              value={subDistrictValue}
              defaultValue={subDistrictValue}
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
              defaultValue={urbanVillageValue}
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
              value={address}
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
