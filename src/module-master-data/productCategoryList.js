import React, { useEffect, useState } from "react";
import { uriMaster } from "../constanta/constanta";
import { ApiGet } from "../util/api";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

export default function ProductCategory() {
  const [data, setData] = useState([{}]);
  const auth = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const fetchListData = async () => {
    const response = await ApiGet(
      `${uriMaster}/productcategory?page=${currentPage}&order_by=name DESC`,
      auth.token
    );
    console.log("response -> ", response);
    setData(response.payload.data);
  };
  const fetchCountData = async () => {
    const response = await ApiGet(
      uriMaster + "/productcategory/count",
      auth.token
    );
    console.log("response -> ", response.payload.data);
    setTotalItems(response.payload.data);
  };
  useEffect(() => {
    fetchListData();
    fetchCountData();
  }, []);

  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
    // setCurrentPage(event);
  };
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
          <button
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
              Product Category Code
            </th>
            <th scope="col" class="px-6 py-3">
              Product Category Name
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
          {data.map((d, i) => {
            return (
              <tr class="bg-white border-b hover:bg-gray-50">
                {/* <th
              scope="row"
              class="px-6 py-4 font-medium text-black whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th> */}
                <td class="px-6 py-4 font-medium text-black">{d.code}</td>
                <td class="px-6 py-4 font-medium text-black">{d.name}</td>
                <td class="px-6 py-4 font-medium text-black">{d.createdAt}</td>
                <td class="px-6 py-4 font-medium text-black">{d.updatedAt}</td>
                <td class="px-6 py-4 font-medium text-black">
                  <a href="#" class="font-medium text-blue-600 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 ml-4 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span class="font-semibold text-gray-900">
            {(currentPage - 1) * itemsPerPage + 1}-{currentPage * itemsPerPage}
          </span>{" "}
          of <span class="font-semibold text-gray-900">{totalItems}</span>
        </span>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName={
            "inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 bg-white rounded-s-lg rounded-e-lg"
          }
          activeLinkClassName={"bg-red-500 z-10 text-white"}
          pageLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700s"
          }
          previousLinkClassName={
            "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          }
          nextLinkClassName={
            "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          }
        />
      </nav>
    </div>
  );
}
