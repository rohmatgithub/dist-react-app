import React from "react";
import { formatRupiah } from "../util/regex";
import { useLocation } from "react-router-dom";

export default function DisplayCustomerPurchase() {
  const location = useLocation();
  console.log(location?.state);
  let data = location?.state?.data;
  let fromDate = location?.state?.fromDate;
  let thruDate = location?.state?.thruDate;
  return (
    <div class="relative overflow-x-auto shadow-md mt-10">
      <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">{`Report Date : ${fromDate} - ${thruDate}`}</div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md sm:rounded-lg">
        <thead class="text-xs text-gray-100 uppercase bg-gray-600">
          <tr>
            {/* <th scope="col" class="px-6 py-3">
              Division
            </th> */}
            <th scope="col" class="px-6 py-3">
              Customer
            </th>
            <th scope="col" class="px-6 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Quantity
            </th>
            <th scope="col" class="px-6 py-3">
              Total Gross Amount
            </th>
            <th scope="col" class="px-6 py-3">
              Total Net Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, i) => {
              return (
                <tr class="bg-white border-b hover:bg-gray-50">
                  <td class="px-6 py-4 font-medium text-black">
                    {d.customer_code + " - " + d.customer_name}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {d.product_code + " - " + d.product_name}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">{d.qty}</td>
                  <td class="px-6 py-4 font-medium text-black">
                    {formatRupiah(d.line_gross_amount)}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {formatRupiah(d.line_net_amount)}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" className="">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
