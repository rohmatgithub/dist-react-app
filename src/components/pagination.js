import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination(props) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next"
      onPageChange={props.onPageChange}
      pageRangeDisplayed={3}
      pageCount={props.pageCount}
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
  );
}
