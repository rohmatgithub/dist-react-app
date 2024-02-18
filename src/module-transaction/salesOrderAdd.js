import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ApiGet, ApiPost } from "../components/api";
import {
  styleInput,
  styleLable,
  uriMaster,
  uriTrans,
} from "../constanta/constanta";
import Select from "react-select";
import {
  inputFormatRupiah,
  handleCode,
  handleName,
  handleNumber,
  formatRupiah,
} from "../util/regex";
import { notifyError, notifySuccess } from "../components/alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faEdit,
  faRemove,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ModalProduct from "./modalProduct";

export default function SalesOrderAdd() {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [customerOptions, setCustomerOptions] = useState([{}]);
  const [customerValue, setCustomerValue] = useState(null);
  const [listProduct, setListProduct] = useState(null);
  const [listItem, setListItem] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dataEdit, setDataEdit] = useState(null);
  const [qty, setQty] = useState(0);
  const [valueSearch, setvalueSearch] = useState("");
  const [isHiddenModalProduct, setIsHiddenModalProduct] = useState(true);
  useEffect(() => {
    fetchCustomer();
    fetchProduct();
  }, []);

  // Helper function to perform the search
  const performSearch = (event) => {
    setvalueSearch(event.target.value);
    if (event.key !== "Enter") {
      return;
    }
    let value = event.target.value;
    const searchTerm = value.toLowerCase();
    const results = listProduct.filter((item) => {
      return Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchTerm)
      );
    });

    if (results.length === 1) {
      setDataEdit({
        id: results[0].id,
        code: results[0].code,
        name: results[0].name,
        selling_price: results[0].selling_price,
      });
      setvalueSearch(results.code + " - " + results.name);
    } else {
      setIsHiddenModalProduct(false);
    }
    setFilteredData(results);
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

  const fetchProduct = async () => {
    const response = await ApiGet(
      uriMaster + `/product?page=1&limit=-99&order_by=name ASC`,
      auth.token
    );
    if (response.payload.data === null) {
      return;
    }
    const data = response.payload.data.map((item) => ({
      id: item.id,
      code: item.code,
      name: item.name,
      selling_price: item.selling_price,
    }));
    return setListProduct(data);
  };

  const buttonSave = async () => {
    if (customerValue === null) {
      notifyError("Must select a customer");
      return;
    }
    if (listItem.length === 0) {
      notifyError("Must select a product");
      return;
    }
    let total_gross_amount = 0;
    let total_net_amount = 0;
    listItem.map((item) => {
      total_gross_amount += item.line_gross_amount;
      total_net_amount += item.line_net_amount;
    });
    let reqBody = {
      order_number: orderNumber,
      order_date: orderDate,
      customer_id: customerValue.value,
      total_gross_amount: total_gross_amount,
      total_net_amount: total_net_amount,
      list_item: listItem,
    };
    const response = await ApiPost(`${uriTrans}/order`, reqBody, auth.token);

    if (response.payload.status.detail !== null) {
      const myObject = response.payload.status.detail;
      Object.keys(myObject).map((key, index) => {
        let elementInput = document.getElementById(key);
        if (elementInput) {
          elementInput.className += " border-2 border-rose-500 rounded-md";
        }
        let elemenetMsg = document.getElementById(key + "_msg");
        if (elemenetMsg) {
          elemenetMsg.className =
            "text-xs text-rose-500 pointer-events-none opacity-100";
          elemenetMsg.innerHTML = myObject[key];
        }
      });
      return;
    }
    if (response.status === 400 || response.status === 500) {
      notifyError(response.payload.status.message);
      return;
    }

    if (response.status === 200) {
      notifySuccess(response.payload.status.message);
      navigate("/transaction/salesorder");
    }
    // setData(response.payload.data);
  };
  const buttonCancel = async () => {
    navigate("/transaction/salesorder");
  };

  const buttonCancelItem = () => {
    setDataEdit(null);
    setQty(0);
    document.getElementById("search-product").value = "";
  };

  const buttonAddProduct = () => {
    const existingItem = listItem.find((item) => item.id === dataEdit.id);
    if (existingItem) {
      notifyError("This product already exists");
      return;
    }
    let temp = {
      product_id: dataEdit.id,
      code: dataEdit.code,
      name: dataEdit.name,
      selling_price: dataEdit.selling_price,
      qty: parseInt(qty),
      line_gross_amount: dataEdit.selling_price * qty,
      line_net_amount: dataEdit.selling_price * qty,
    };
    setListItem([...listItem, temp]);
    buttonCancelItem();
  };

  const handleRemove = (id) => {
    const newList = listItem.filter((item) => item.id !== id);
    setListItem(newList);
  };

  const handleEditItem = (item) => {
    handleRemove(item.id);
    setDataEdit({
      id: item.id,
      code: item.code,
      name: item.name,
      selling_price: item.selling_price,
    });
    setQty(item.qty);
  };

  return (
    <div className="items-stretch bg-white flex flex-col pl-14 pr-20 py-10 max-md:px-5 mt-[20px]">
      <ModalProduct
        isHidden={isHiddenModalProduct}
        listProduct={filteredData}
        setIsHidden={setIsHiddenModalProduct}
        setDataEdit={setDataEdit}
      />
      <div className="flex flex-col min-h-[300px] justify-between">
        <div>
          <div>
            <div>
              <label htmlFor="order_number" className={styleLable}>
                Order Number
              </label>
              <input
                type="text"
                name="order_number"
                id="order_number"
                className={styleInput + " max-w-80"}
                value={orderNumber}
                placeholder="Auto if blank"
                onChange={(e) => handleCode(e, setOrderNumber)}
              />
              <div
                id="order_number_msg"
                className="text-xs text-rose-500 pointer-events-none opacity-0"
              ></div>
            </div>
            <div>
              <label htmlFor="order_date" className={styleLable}>
                Order Date
              </label>
              <input
                type="date"
                name="order_date"
                id="order_date"
                className={styleInput + " w-40"}
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
              />
              <div
                id="order_date_msg"
                className="text-xs text-rose-500 pointer-events-none opacity-0"
              ></div>
            </div>
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
                // value={subDistrictValue}
              />
              <div
                id="customer_id_msg"
                className="text-xs text-rose-500 pointer-events-none opacity-0"
              ></div>
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
                  <th scope="col" class="px-4 py-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-300 border-b">
                  <td class="px-1 py-2 font-medium text-black">
                    <div className="relative">
                      <input
                        id="search-product"
                        type="search"
                        className="block w-full px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search products..."
                        onKeyUp={performSearch}
                        value={dataEdit && dataEdit.code + "-" + dataEdit.name}
                      />
                    </div>
                  </td>
                  <td class="px-4 py-2 font-medium text-black">
                    {dataEdit ? formatRupiah(dataEdit.selling_price) : 0}
                  </td>
                  <td class="px-4 py-2 font-medium text-black">
                    <input
                      type="text"
                      className="block w-28 px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={qty}
                      onChange={(e) => handleNumber(e, setQty, 11)}
                    />
                  </td>
                  <td class="px-4 py-2 font-medium text-black">
                    {dataEdit ? formatRupiah(dataEdit.selling_price * qty) : 0}
                  </td>
                  <td class="px-4 py-2 font-medium text-black">
                    {dataEdit ? formatRupiah(dataEdit.selling_price * qty) : 0}
                  </td>
                  <td class="px-4 py-2 font-medium text-black">
                    <button
                      className="cursor-pointer"
                      onClick={buttonAddProduct}
                    >
                      <FontAwesomeIcon className="hover:text-lg" icon={faAdd} />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={buttonCancelItem}
                    >
                      <FontAwesomeIcon
                        className="ml-4 hover:text-lg"
                        icon={faRemove}
                      />
                    </button>
                  </td>
                </tr>
                {listItem &&
                  listItem.map((d, i) => {
                    return (
                      <tr class="bg-white border-b hover:bg-gray-50">
                        <td class="px-1 py-2 font-medium text-black">
                          {d?.code + " - " + d?.name}
                        </td>
                        <td class="px-4 py-2 font-medium text-black">
                          {formatRupiah(d?.selling_price)}
                        </td>
                        <td class="px-4 py-2 font-medium text-black">
                          {d?.qty}
                        </td>
                        <td class="px-4 py-2 font-medium text-black">
                          {formatRupiah(d?.line_gross_amount)}
                        </td>
                        <td class="px-4 py-2 font-medium text-black">
                          {formatRupiah(d?.line_net_amount)}
                        </td>
                        <td class="px-4 py-2 font-medium text-black">
                          <button
                            className="cursor-pointer"
                            onClick={(e) => handleEditItem(d)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className="cursor-pointer"
                            onClick={(e) => handleRemove(d.id)}
                          >
                            <FontAwesomeIcon className="ml-4" icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex mt-5">
          <div>
            <button
              className="bg-blue-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
              onClick={buttonSave}
            >
              Save
            </button>
          </div>
          <div className="ml-5">
            <button
              className="bg-gray-500 border-black h-[40px] w-[150px] mb-[20px] rounded-[25px] text-[20px] text-white"
              onClick={buttonCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
