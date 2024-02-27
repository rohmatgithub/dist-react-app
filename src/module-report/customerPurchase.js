import React, { useEffect, useState } from "react";
import { ApiGet, ApiPost } from "../components/api";
import {
  styleInput,
  styleLable,
  uriMaster,
  uriTrans,
  urireport,
} from "../constanta/constanta";
import { useSelector } from "react-redux";
import Select from "react-select";
import {
  ButtonExample,
  RangeDate,
  convertDate,
} from "../components/datePicker";
import { Datepicker } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function CustomerPurchase() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const [customerOptions, setCustomerOptions] = useState([{}]);
  const [customerValue, setCustomerValue] = useState({
    label: "",
    value: 0,
  });
  const [fromDate, setFromDate] = useState(new Date());
  const [thruDate, setThruDate] = useState(new Date());

  useEffect(() => {
    fetchCustomer();
  }, []);
  const fetchData = async () => {
    console.log("from date : ", fromDate, " to date : ", thruDate);
    let body = {
      customer_id: customerValue.id,
      from_date: convertDate(fromDate),
      thru_date: convertDate(thruDate),
    };
    const response = await ApiPost(
      `${urireport}/customerpurchase`,
      body,
      auth.token
    );
    console.log(response);
    navigate("/display/customerpurchase", {
      state: {
        data: response.payload.data,
        fromDate: convertDate(fromDate),
        thruDate: convertDate(thruDate),
      },
    });
  };

  const fetchCustomer = async () => {
    const response = await ApiGet(
      uriMaster + `/customer?page=1&limit=-99&order_by=name ASC`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      label: item.code + " - " + item.name,
      value: item.id,
    }));
    return setCustomerOptions(data);
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <label htmlFor="customer" className={styleLable}>
              Customer
            </label>
            <Select
              styles={{
                control: (css) => ({
                  ...css,
                  width: 350,
                }),
                menu: ({ width, ...css }) => ({
                  ...css,
                  width: 350,
                  //   minWidth: "20%",
                }),
              }}
              id="customer_id"
              options={customerOptions}
              onChange={setCustomerValue}
            />
            <div
              id="customer_id_msg"
              className="text-xs text-rose-500 pointer-events-none opacity-0"
            ></div>
          </div>
          <div>
            <label htmlFor="order_date" className={styleLable}>
              Date
            </label>
            <div date-rangepicker class="flex items-center">
              <Datepicker
                maxDate={thruDate}
                onSelectedDateChanged={(e) => {
                  setFromDate(e);
                }}
              />
              <span class="mx-4 text-gray-500">to</span>
              <Datepicker
                minDate={fromDate}
                onSelectedDateChanged={(e) => {
                  setThruDate(e);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <div>
            <button
              className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
              onClick={fetchData}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
