import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { styleInput, styleLable, uriTrans } from "../constanta/constanta";
import { ApiGet, ApiPost } from "../components/api";
import { formatRupiah } from "../util/regex";
import { notifyError, notifySuccess } from "../components/alert";

export default function SalesInvoiceDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await ApiGet(`${uriTrans}/invoice/${id}`, auth.token);
      setData(response.payload.data);
    };

    fetchDetails();
  }, []);

  const buttonEdit = (e) => {
    e.preventDefault();
    navigate("/transaction/salesinvoice/edit/" + id);
  };
  const buttonCancel = (e) => {
    e.preventDefault();
    navigate("/transaction/salesinvoice");
  };
  
  const auth = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col min-h-[300px] justify-between">
      <div>
        <div>
          <div>
            <label className={styleLable}>Invoice Number</label>
            <div className={styleInput}>{data?.invoice_number}</div>
          </div>
          <div>
            <label className={styleLable}>Invoice Date</label>
            <div className={styleInput}>{data?.invoice_date}</div>
          </div>
          <div>
            <label className={styleLable}>Customer</label>
            <div className={styleInput}>
              {data?.customer_code + " - " + data?.customer_name}
            </div>
          </div>
          <div>
            <label className={styleLable}>Total Gross Amount</label>
            <div className={styleInput}>{data?.total_gross_amount}</div>
          </div>
          <div>
            <label className={styleLable}>Total Net Amount</label>
            <div className={styleInput}>{data?.total_gross_amount}</div>
          </div>
        </div>
        <div className="min-h-80 mt-10 w-full">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 border border-gray-300">
            <thead class="text-xs text-gray-100 uppercase bg-gray-600">
              <tr>
                <th scope="col" class="px-4 py-2">
                  Product
                </th>
                <th scope="col" class="px-4 py-2">
                  Selling Price
                </th>
                <th scope="col" class="px-4 py-2">
                  Quantity
                </th>
                <th scope="col" class="px-4 py-2">
                  Line Gross Amount
                </th>
                <th scope="col" class="px-4 py-2">
                  Line Net Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.list_items &&
                data?.list_items.map((d, i) => {
                  return (
                    <tr class="bg-white border-b hover:bg-gray-50">
                      <td class="px-1 py-2 font-medium text-black">
                        {d?.product_code + " - " + d?.product_name}
                      </td>
                      <td class="px-4 py-2 font-medium text-black">
                        {formatRupiah(d?.selling_price)}
                      </td>
                      <td class="px-4 py-2 font-medium text-black">{d?.qty}</td>
                      <td class="px-4 py-2 font-medium text-black">
                        {formatRupiah(d?.line_gross_amount)}
                      </td>
                      <td class="px-4 py-2 font-medium text-black">
                        {formatRupiah(d?.line_net_amount)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex mt-5">
        <div className="ml-5">
          <button
            className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
            onClick={buttonCancel}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
