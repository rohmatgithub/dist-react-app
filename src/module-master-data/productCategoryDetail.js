import { useNavigate, useParams } from "react-router-dom";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApiGet } from "../components/api";
import { formatDatetime } from "../util/date";

export default function ProductCategoryDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await ApiGet(
        `${uriMaster}/productcategory/${id}`,
        auth.token
      );
      console.log(response);
      setData(response.payload.data);
    };

    fetchDetails();
  }, []);

  const buttonEdit = (e) => {
    e.preventDefault();
    navigate("/masterdata/productcategory/edit/" + id);
  };
  const buttonCancel = (e) => {
    e.preventDefault();
    navigate("/masterdata/productcategory");
  };
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="text-black text-4xl leading-6 mr-4 mb-10 max-md:max-w-full max-md:mr-2.5">
        Components
      </div>

      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          {/* <div>
            <label htmlFor="division" className={styleLable}>
              Division
            </label>
            <div className={styleInput}>
              {data.division_code + " - " + data.division_name}
            </div>
          </div> */}
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
