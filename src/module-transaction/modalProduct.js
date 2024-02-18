import React from "react";
import { formatRupiah } from "../util/regex";

export default function ModalProduct(props) {
  let isHidden = props.isHidden;
  let listProduct = props.listProduct;

  const handleClose = () => {
    props.setIsHidden(true);
  };

  const handleSetEditData = (d) => {
    props?.setDataEdit({
      id: d.id,
      code: d.code,
      name: d.name,
      selling_price: d.selling_price,
    });
    props.setIsHidden(true);
  };

  return (
    // <div className="fixed inset-0 flex items-center justify-center z-50">
    //   <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
    //     <h2 className="text-2xl font-bold mb-4">Card Title</h2>
    //     <p className="text-gray-700 mb-4">
    //       This is some content inside the card.
    //     </p>
    //     <button className="bg-blue-500 text-white py-2 px-4 rounded">
    //       Click Me
    //     </button>
    //   </div>
    // </div>
    // <div>
    //   <button
    //     data-modal-target="select-modal"
    //     data-modal-toggle="select-modal"
    //     class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //     type="button"
    //   >
    //     Toggle modal
    //   </button>

    <div
      id="select-modal"
      tabindex="-1"
      aria-hidden="false"
      class={
        isHidden
          ? "overflow-y-auto overflow-x-hidden fixed inset-0 flex items-center justify-center z-50 hidden"
          : "overflow-y-auto overflow-x-hidden fixed inset-0 flex items-center justify-center z-50"
      }
    >
      <div class="relative p-4 w-full max-w-max max-h-full">
        <div class="relative bg-white rounded-lg shadow bg-gray-200">
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-gray-300">
            <h3 class="text-lg font-semibold text-gray-900">Select Product</h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center"
              data-modal-toggle="select-modal"
              onClick={handleClose}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product Code
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Selling Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {listProduct && listProduct.length > 0 ? (
                  listProduct.map((d) => {
                    return (
                      <tr
                        class="bg-white border-b hover:bg-gray-100 "
                        onClick={(e) => handleSetEditData(d)}
                      >
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                        >
                          {d.code}
                        </th>
                        <td class="px-6 py-4">{d.name}</td>
                        <td class="px-6 py-4">
                          {formatRupiah(d.selling_price)}
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
        </div>
      </div>
      //{" "}
    </div>
  );
}
