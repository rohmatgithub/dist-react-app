import { useSelector } from "react-redux";
import { styleInput, styleLable, uriMaster } from "../constanta/constanta";
import { ApiPost } from "../util/api";
import { useState } from "react";

export default function ProductCategoryAdd() {
  const auth = useSelector((state) => state.auth);
  const [reqBody, setReqBody] = useState({
    code: "",
    name: "",
  });

  const onChangeInput = (key, value) => {
    setReqBody((prevsValue) => {
      return {
        ...prevsValue,
        [key]: value,
      };
    });
  };
  const buttonSave = async () => {
    const response = await ApiPost(
      `${uriMaster}/productcategory`,
      reqBody,
      auth.token
    );
    console.log("response -> ", response);
    // setData(response.payload.data);
  };
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="text-black text-4xl leading-6 mr-4 mb-10 max-md:max-w-full max-md:mr-2.5">
        Components
      </div>

      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="code" className={styleLable}>
              Code
            </label>
            <input
              type="text"
              name="code"
              id="code"
              className={styleInput}
              onChange={(e) => onChangeInput("code", e.target.value)}
            />
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
              onChange={(e) => onChangeInput("name", e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
            onClick={buttonSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
