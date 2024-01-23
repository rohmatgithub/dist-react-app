import { useNavigate, useParams } from "react-router-dom";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ApiGet } from "../components/api";
import { formatDatetime } from "../util/date";

export default function ProductMasterDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await ApiGet(`${uriMaster}/product/${id}`, auth.token);
      console.log(response);
      setData(response.payload.data);
    };

    fetchDetails();
  }, []);

  const buttonEdit = (e) => {
    e.preventDefault();
    navigate("/masterdata/product/edit/" + id);
  };
  const buttonCancel = (e) => {
    e.preventDefault();
    navigate("/masterdata/product");
  };
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">

      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <label htmlFor="division" className={styleLable}>
            Division
          </label>
          <div className={styleInput}>
            {data?.division?.code + " - " + data?.division?.name}
          </div>
        </div>
        <div>
          <label htmlFor="category" className={styleLable}>
            Product Category
          </label>
          <div className={styleInput}>
            {data?.category?.code + " - " + data?.category?.name}
          </div>
        </div>
        <div>
          <label htmlFor="group" className={styleLable}>
            Product Group
          </label>
          <div className={styleInput}>
            {data?.group?.code + " - " + data?.group?.name}
          </div>
        </div>
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
          <label htmlFor="selling_price" className={styleLable}>
            Selling Price
          </label>
          <div className={styleInput}>{data.sell_price}</div>
        </div>
        <div>
          <label htmlFor="buying_price" className={styleLable}>
            Buying Price
          </label>
          <div className={styleInput}>{data.buy_price}</div>
        </div>
        <div>
          <label htmlFor="uom1" className={styleLable}>
            UOM 1
          </label>
          <div className={styleInput}>{data.uom1}</div>
        </div>
        <div>
          <label htmlFor="uom2" className={styleLable}>
            UOM 2
          </label>
          <div className={styleInput}>{data.uom2}</div>
        </div>
        <div>
          <label htmlFor="uom3" className={styleLable}>
            Convertions 1 to 2
          </label>
          <div className={styleInput}>{data.conv_1_to_2}</div>
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
