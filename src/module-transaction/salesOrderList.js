import React, { useEffect, useState } from "react";
import { uriTrans } from "../constanta/constanta";
import { ApiGet } from "../components/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Pagination from "../components/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDatetime } from "../util/date";

export default function SalesOrderList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([{}]);
  const auth = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const fetchListData = async (page) => {
    const response = await ApiGet(
      `${uriTrans}/order?page=${page}&order_by=updated_at DESC`,
      auth.token
    );
    if (response.statusCode === 401) {
      dispatch({
        type: "LOGOUT",
      });
      navigate("/");
      return;
    }
    setData(response.payload.data);
  };
  const fetchCountData = async () => {
    const response = await ApiGet(uriTrans + "/order/count", auth.token);
    setTotalItems(response.payload.data);
  };
  useEffect(() => {
    fetchListData(currentPage);
    fetchCountData();
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    fetchListData(event.selected + 1);
  };
  const buttonAdd = (event) => {
    event.preventDefault();
    navigate("/transaction/salesorder/add");
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
          <button
            type="button"
            onClick={buttonAdd}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 focus:outline-none"
          >
            Add
          </button>
        </div>
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="outline-none block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-600 focus:border-gray-600"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-100 uppercase bg-gray-600">
          <tr>
            {/* <th scope="col" class="px-6 py-3">
              Division
            </th> */}
            <th scope="col" class="px-6 py-3">
              Order Number
            </th>
            <th scope="col" class="px-6 py-3">
              Order Date
            </th>
            <th scope="col" class="px-6 py-3">
              Customer Name
            </th>
            <th scope="col" class="px-6 py-3">
              Total Gross Amount
            </th>
            <th scope="col" class="px-6 py-3">
              Total Net Amount
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, i) => {
              return (
                <tr class="bg-white border-b hover:bg-gray-50">
                  {/* <td class="px-6 py-4 font-medium text-black">
                    {d?.division?.code + " - " + d?.division?.name}
                  </td> */}
                  <td class="px-6 py-4 font-medium text-black">
                    {d.order_number}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {d.order_date}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {d.customer_name}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {d.total_gross_amount}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {d.total_net_amount}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    <Link
                      to={`/transaction/salesorder/edit/${d.id}`}
                      class="font-medium text-blue-600 hover:underline"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link
                      to={`/transaction/salesorder/detail/${d.id}`}
                      class="ml-4 font-medium text-blue-600 hover:underline"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
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
      <Pagination
        onPageChange={handlePageClick}
        pageCount={pageCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </div>
  );
}
