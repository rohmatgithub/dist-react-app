import { useNavigate, useParams } from "react-router-dom";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApiGet } from "../components/api";
import { formatDatetime } from "../util/date";

export default function CustomerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await ApiGet(`${uriMaster}/customer/${id}`, auth.token);
      console.log(response);
      setData(response.payload.data);
    };

    fetchDetails();
  }, []);

  const buttonEdit = (e) => {
    e.preventDefault();
    navigate("/masterdata/customer/edit/" + id);
  };
  const buttonCancel = (e) => {
    e.preventDefault();
    navigate("/masterdata/customer");
  };
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <label htmlFor="code" className={styleLable}>
            Code
          </label>
          <div className={styleInput}>{data.code}</div>
        </div>
        <div>
          <label htmlFor="name" className={styleLable}>
            Name
          </label>
          <div className={styleInput}>{data.name}</div>
        </div>
        <div>
          <label htmlFor="phone" className={styleLable}>
            Phone
          </label>
          <div className={styleInput}>{data.phone}</div>
        </div>
        <div>
          <label htmlFor="email" className={styleLable}>
            Email
          </label>
          <div className={styleInput}>{data.email}</div>
        </div>
        <div>
          <label htmlFor="country" className={styleLable}>
            Country
          </label>
          <div className={styleInput}>
            {data?.country?.code + " - " + data?.country?.name}
          </div>
        </div>
        <div>
          <label htmlFor="province" className={styleLable}>
            Province
          </label>
          <div className={styleInput}>
            {data?.province?.code + " - " + data?.province?.name}
          </div>
        </div>
        <div>
          <label htmlFor="district" className={styleLable}>
            District
          </label>
          <div className={styleInput}>
            {data?.district?.code + " - " + data?.district?.name}
          </div>
        </div>
        <div>
          <label htmlFor="sub_district" className={styleLable}>
            Sub District
          </label>
          <div className={styleInput}>
            {data?.sub_district?.code + " - " + data?.sub_district?.name}
          </div>
        </div>
        <div>
          <label htmlFor="uv" className={styleLable}>
            Urban Village
          </label>
          <div className={styleInput}>
            {data?.urban_village?.code + " - " + data?.urban_village?.name}
          </div>
        </div>
        <div>
          <label htmlFor="created_at" className={styleLable}>
            Created Date
          </label>
          <div className={styleInput}>{formatDatetime(data.created_at)}</div>
        </div>
        <div>
          <label htmlFor="updated_at" className={styleLable}>
            Updated Date
          </label>
          <div className={styleInput}>{formatDatetime(data.updated_at)}</div>
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
