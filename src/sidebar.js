import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Sidebar() {
  const [active, setActive] = useState("");

  const toggleActive = (item) => {
    setActive(active === item ? "" : item);
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
                to="/"
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
    </div>
    // <div className="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0">
    //   <div className="bg-white flex grow justify-between gap-5 w-full pr-6 pt-12 items-start max-md:mt-10 max-md:pr-5">
    //     {/* <img
    //       loading="lazy"
    //       src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6f4afb7258158df813bfdcce9c8963474988970c9e16640a4725b149f75f1dc?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //       className="aspect-[0.08] object-contain object-center w-[3px] overflow-hidden shrink-0 max-w-full mt-24 max-md:mt-10"
    //     /> */}
    //     <div className="flex grow basis-[0%] flex-col mt-3.5 pb-8">
    //       <div className="text-blue-800 text-2xl font-medium self-stretch pl-5">
    //         Sales.
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 pl-5 mt-20 self-start max-md:ml-2.5 max-md:mt-10 border-l-4 border-blue-500">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c5b697cff3442e0b525c0ff20165bdca0ff172b0ac2c76b77898c746df34b6e?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-blue-600 text-base tracking-wide my-auto">
    //           Dashboard
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8633c8475b01501df1eb6cf80989b3d30cbc6c18a5f993db781c6a3b8fdc33f?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-black text-base tracking-wide my-auto">
    //           Lab Test
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/809b1761bedebc7720f5c52949ac5b47e8d13d4104b42f1ca65976b229b2660c?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-neutral-900 text-base tracking-wide grow whitespace-nowrap mt-1.5 self-start">
    //           Appointment
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f3c92be5760688408aa5e28a9d6bf7804059187fa4590dbd080edf14e999b8c?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-neutral-900 text-base tracking-wide self-center grow whitespace-nowrap my-auto">
    //           Medicine Order
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/36875b3a6cdc8c6bbcfacc8999e5881007ab08a6525a4ce42a00daeed75d40ea?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-neutral-900 text-base tracking-wide mt-2">
    //           Message
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b168603d8058eef5f24cce362575b8ec5a78632935800f782432f82b8f6a5d0?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-neutral-900 text-base tracking-wide mt-2">
    //           Payment
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-10 self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/19940b9f9a25c1b24cd4248cd2345f1f18236232be82caa394b7ba6bd04afde2?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-neutral-900 text-base tracking-wide mt-1.5">
    //           Settings
    //         </div>
    //       </div>
    //       <div className="cursor-pointer flex items-stretch gap-4 ml-3 mt-[525px] self-start max-md:ml-2.5 max-md:mt-10">
    //         <img
    //           loading="lazy"
    //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef8e7aad8c0d8605a8cc6dfa1933046444c5b5de431feb4f2421bf0693969c2?apiKey=57feb64800df4e20be2c6f74ae60e771&"
    //           className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //         />
    //         <div className="text-neutral-900 text-base tracking-wide mt-1.5">
    //           Help
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
