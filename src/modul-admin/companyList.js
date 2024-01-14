import React, { useEffect, useState } from "react";
import { uriMaster } from "../constanta/constanta";
import { ApiGet } from "../components/api";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Pagination from "../components/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { formatDatetime } from "../util/date";

export default function CompanyList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([{}]);
  const auth = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const fetchListData = async () => {
    const response = await ApiGet(
      `${uriMaster}/company?page=${currentPage}&order_by=updated_at DESC`,
      auth.token
    );
    if (response.status === 401) {
      dispatch({
        type: "LOGOUT",
      });
      navigate("/");
      return;
    }
    setData(response.payload.data);
  };
  const fetchCountData = async () => {
    const response = await ApiGet(uriMaster + "/company/initiate", auth.token);
    setTotalItems(response.payload.data);
  };
  useEffect(() => {
    fetchListData();
    fetchCountData();
  }, []);

  useEffect(() => {
    return () => {};
  }, []);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    // setCurrentPage(event);
  };
  const buttonAdd = (event) => {
    event.preventDefault();
    navigate("/admin/company/add");
  };

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
          {/* <button
            id="dropdownRadioButton"
            data-dropdown-toggle="dropdownRadio"
            class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
            type="button"
          >
            <svg
              class="w-3 h-3 text-gray-500 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            Last 30 days
            <svg
              class="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button> */}
          <button
            type="button"
            onClick={buttonAdd}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 ml-5 focus:outline-none"
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
            <th scope="col" class="px-6 py-3">
              Code
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Address
            </th>
            <th scope="col" class="px-6 py-3">
              Created Date
            </th>
            <th scope="col" class="px-6 py-3">
              Updated Date
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
                  <td class="px-6 py-4 font-medium text-black">{d.code}</td>
                  <td class="px-6 py-4 font-medium text-black">{d.name}</td>
                  <td class="px-6 py-4 font-medium text-black">
                    {d.address_1}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {formatDatetime(d.created_at)}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    {formatDatetime(d.updated_at)}
                  </td>
                  <td class="px-6 py-4 font-medium text-black">
                    <Link
                      to={`/admin/company/edit/${d.id}`}
                      class="font-medium text-blue-600 hover:underline"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link
                      to={`/admin/company/detail/${d.id}`}
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
