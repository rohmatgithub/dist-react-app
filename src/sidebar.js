import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
export default function Sidebar() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  const toggleActive = (item) => {
    setActive(active === item ? "" : item);
  };

  const logOutSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // If authentication is successful, navigate to home page
    // localStorage.removeItem("isLogin");
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
    // window.location.reload();
  };
  return (
    <div className="bg-white w-64 h-screen flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="p-6">
          <button className="text-blue-600 font-bold text-lg">My App</button>
        </div>
        <ul>
          <li>
            <div className="cursor-pointer flex items-stretch gap-4 pl-5 mt-20 self-start max-md:ml-2.5 max-md:mt-10 border-l-4 border-blue-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c5b697cff3442e0b525c0ff20165bdca0ff172b0ac2c76b77898c746df34b6e?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <Link
                to="/home"
                className="text-blue-600 text-base tracking-wide my-auto"
              >
                Dashboard
              </Link>
            </div>
          </li>
          <li>
            <div
              onClick={() => toggleActive("masterData")}
              className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-base tracking-wide my-auto">
                Master Data
              </div>
              <span className="transform rotate-90">&#x276F;</span>
            </div>
            {active === "masterData" && (
              <ul className="pl-4">
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/masterdata/productcategory"
                  >
                    Product Category
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/masterdata/productgroup"
                  >
                    Product Group
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/masterdata/product"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/masterdata/customer"
                  >
                    Customer
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/masterdata/salesman"
                  >
                    Salesman
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              onClick={() => toggleActive("transaction")}
              className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-base tracking-wide my-auto">
                Transaction
              </div>
              <span className="transform rotate-90">&#x276F;</span>
            </div>
          </li>
          <li>
            <div
              onClick={() => toggleActive("report")}
              className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-base tracking-wide my-auto">
                Report
              </div>
              <span className="transform rotate-90">&#x276F;</span>
            </div>
            {active === "report" && (
              <ul className="pl-4">
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/report/salesorder"
                  >
                    Sales Order
                  </Link>
                </li>
                <li>
                  <Link
                    className="cursor-pointer flex items-stretch gap-4 ml-3 mt-7 self-start max-md:ml-2.5 max-md:mt-10"
                    to="/report/salesinvoice"
                  >
                    Sales Invoice
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              onClick={() => toggleActive("admin")}
              className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-black text-base tracking-wide my-auto">
                Admin
              </div>
              <span className="transform rotate-90">&#x276F;</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="p-6">
        <button
          onClick={logOutSubmit}
          className="text-blue-600 font-bold text-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
