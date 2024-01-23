import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uriAuth } from "./constanta/constanta";
import { ApiGet, ApiPost } from "./components/api";
import { notifyError, notifySuccess } from "./components/alert";

export default function SelectBranch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetchAuthorize();
  }, []);

  const fetchAuthorize = async () => {
    const response = await ApiGet(uriAuth + `/authorize`, auth.token);
    if (response.payload.data === null) {
      return;
    }
    return setdata(response.payload.data.list);
  };

  const onClick = async (item) => {
    const response = await ApiPost(
      uriAuth + `/selectbranch`,
      { branch_id: item.id },
      auth.token
    );

    if (response.status === 400) {
      notifyError(response.payload.status.message);
      return;
    }

    if (response.status === 200) {
      notifySuccess(response.payload.status.message);
      dispatch({
        type: "UPDATE_COMPANY_BRANCH",
        isSelected: true,
        companyBranch: {
          id: item.id,
          code: item.code,
          name: item.name,
        },
      });
      navigate("/home");
    }
  };
  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]"  style={{textAlign: 'center'}}>
      <div className="font-bold text-2xl mb-16">SELECT COMPANY BRANCH</div>
      <div className="flex flex-wrap min-h-[600px] max-h-[600px] justify-evenly">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col text-center p-6 bg-blue-100 min-w-52 max-h-32 rounded-lg shadow hover:bg-gray-100"
              onClick={() => onClick(item)}
            >
              <div className="mb-5">{item.code}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
