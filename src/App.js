import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import ProductCategory from "./module-master-data/productCategoryList";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import ProductCategoryDetail from "./module-master-data/productCategoryDetail";
import { useSelector } from "react-redux";
import ProductGroupList from "./module-master-data/productGroupList";
import ProductCategoryAdd from "./module-master-data/productCategoryAdd";
import CompanyProfileList from "./modul-admin/companyProfileList";
import CompanyProfileAdd from "./modul-admin/companyProfileAdd";
import CompanyProfileDetail from "./modul-admin/companyProfileDetail";
import CompanyProfileEdit from "./modul-admin/companyProfileEdit";
import CompanyList from "./modul-admin/companyList";
import CompanyAdd from "./modul-admin/companyAdd";
import CompanyEdit from "./modul-admin/companyEdit";
import CompanyDetail from "./modul-admin/companyDetail";
import CompanyBranchList from "./modul-admin/companyBranchList";
import CompanyBranchAdd from "./modul-admin/companyBranchAdd";
import CompanyBranchEdit from "./modul-admin/companyBranchEdit";
import CompanyBranchDetail from "./modul-admin/companyBranchDetail";
import CompanyDivisionList from "./modul-admin/companyDivisionList";
import CompanyDivisionAdd from "./modul-admin/companyDivisionAdd";
import CompanyDivisionEdit from "./modul-admin/companyDivisionEdit";
import CompanyDivisionDetail from "./modul-admin/companyDivisionDetail";
import AlertError from "./components/alert";
import { ToastContainer } from "react-toastify";
import UserAdd from "./modul-admin/userAdd";
import UserList from "./modul-admin/userList";
import UserDetail from "./modul-admin/userDetail";
import UserEdit from "./modul-admin/userEdit";
import SelectBranch from "./selectBranch";
import ProductCategoryEdit from "./module-master-data/productCategoryEdit";
import ProductGroupAdd from "./module-master-data/productGroupAdd";
import ProductGroupDetail from "./module-master-data/productGroupDetail";
import ProductGroupEdit from "./module-master-data/productGroupEdit";
import ProductMasterList from "./module-master-data/productMasterList";
import ProductMasterAdd from "./module-master-data/productMasterAdd";
import ProductMasterDetail from "./module-master-data/productMasterDetail";
import ProductMasterEdit from "./module-master-data/productMasterEdit";
import CustomerList from "./module-master-data/customerList";
import CustomerAdd from "./module-master-data/customerAdd";
import CustomerDetail from "./module-master-data/customerDetail";
import CustomerEdit from "./module-master-data/customerEdit";
import SalesOrderAdd from "./module-transaction/salesOrderAdd";
import SalesOrderList from "./module-transaction/salesOrderList";
import SalesOrderDetail from "./module-transaction/salesOrderDetail";
import SalesInvoiceList from "./module-transaction/salesInvoiceList";
import SalesInvoiceDetail from "./module-transaction/salesInvoiceDetail";
import SalesOrderEdit from "./module-transaction/salesOrderEdit";
const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const [titleMenu, setTitleMenu] = useState("");
  /* Check if the user is authenticated  false*/
  const inlineStyles = {
    container: {
      padding: "20px",
      backgroundColor: "#ECECEC",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },
    heading: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "16px",
      color: "#666",
    },
  };

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    setisAuthenticated(auth.isLogin);
    setIsSelected(auth.isSelected);
  }, []);

  useEffect(() => {
    setisAuthenticated(auth.isLogin);
  }, [auth.isLogin]);

  useEffect(() => {
    setIsSelected(auth.isSelected);
  }, [auth.isSelected]);

  console.log("isSelected : ", isSelected);
  console.log("isAuthenticated : ", isAuthenticated);
  return (
    <div className="bg-stone-50 max-md:pr-5">
      <Router>
        {/* {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : isSelected === undefined || !isSelected ? (
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div
              style={inlineStyles.container}
              className="flex flex-col items-stretch w-[100%] h-full max-md:w-full max-md:ml-0"
            >
              <div
                id="header"
                className="justify-between flex gap-5 pt-1.5 items-start max-md:max-w-full max-md:flex-wrap"
              >
                <div className="text-black text-2xl max-md:max-w-full max-md:mt-10">
                  {titleMenu}
                </div>
                <div>foto profile</div>
              </div>
              <Routes>
                <Route path="/selected/branch" element={<SelectBranch />} />
              </Routes>
            </div>
          </div>
        ) : (
          // Other code here
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <Sidebar setTitleMenu={setTitleMenu} />
            <div
              style={inlineStyles.container}
              className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0  max-h-screen overflow-y-scroll"
            >
              <div
                id="header"
                className="justify-between flex gap-5 pt-1.5 items-start max-md:max-w-full max-md:flex-wrap"
              >
                <div className="text-black text-2xl max-md:max-w-full max-md:mt-10">
                  {titleMenu}
                </div>
                <div>foto profile</div>
              </div>
              <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route
                  path="/admin/companyprofile"
                  element={<CompanyProfileList />}
                />
                <Route
                  path="/admin/companyprofile/add"
                  element={<CompanyProfileAdd />}
                />
                <Route
                  path="/admin/companyprofile/edit/:id"
                  element={<CompanyProfileEdit />}
                />
                <Route
                  path="/admin/companyprofile/detail/:id"
                  element={<CompanyProfileDetail />}
                />
                <Route path="/admin/company" element={<CompanyList />} />
                <Route path="/admin/company/add" element={<CompanyAdd />} />
                <Route
                  path="/admin/company/edit/:id"
                  element={<CompanyEdit />}
                />
                <Route
                  path="/admin/company/detail/:id"
                  element={<CompanyDetail />}
                />
                <Route
                  path="/admin/companybranch"
                  element={<CompanyBranchList />}
                />
                <Route
                  path="/admin/companybranch/add"
                  element={<CompanyBranchAdd />}
                />
                <Route
                  path="/admin/companybranch/edit/:id"
                  element={<CompanyBranchEdit />}
                />
                <Route
                  path="/admin/companybranch/detail/:id"
                  element={<CompanyBranchDetail />}
                />
                <Route
                  path="/admin/companydivision"
                  element={<CompanyDivisionList />}
                />
                <Route
                  path="/admin/companydivision/add"
                  element={<CompanyDivisionAdd />}
                />
                <Route
                  path="/admin/companydivision/edit/:id"
                  element={<CompanyDivisionEdit />}
                />
                <Route
                  path="/admin/companydivision/detail/:id"
                  element={<CompanyDivisionDetail />}
                />
                <Route path="/admin/user" element={<UserList />} />
                <Route path="/admin/user/add" element={<UserAdd />} />
                <Route path="/admin/user/detail/:id" element={<UserDetail />} />
                <Route path="/admin/user/edit/:id" element={<UserEdit />} />
                <Route
                  path="/masterdata/productcategory"
                  element={<ProductCategory />}
                />
                <Route
                  path="/masterdata/productcategory/detail/:id"
                  element={<ProductCategoryDetail />}
                />
                <Route
                  path="/masterdata/productcategory/add"
                  element={<ProductCategoryAdd />}
                />
                <Route
                  path="/masterdata/productcategory/edit/:id"
                  element={<ProductCategoryEdit />}
                />
                <Route
                  path="/masterdata/productgroup"
                  element={<ProductGroupList />}
                />
                <Route
                  path="/masterdata/productgroup/add"
                  element={<ProductGroupAdd />}
                />
                <Route
                  path="/masterdata/productgroup/detail/:id"
                  element={<ProductGroupDetail />}
                />
                <Route
                  path="/masterdata/productgroup/edit/:id"
                  element={<ProductGroupEdit />}
                />

                <Route
                  path="/masterdata/product"
                  element={<ProductMasterList />}
                />
                <Route
                  path="/masterdata/product/add"
                  element={<ProductMasterAdd />}
                />
                <Route
                  path="/masterdata/product/detail/:id"
                  element={<ProductMasterDetail />}
                />
                <Route
                  path="/masterdata/product/edit/:id"
                  element={<ProductMasterEdit />}
                />

                <Route path="/masterdata/customer" element={<CustomerList />} />
                <Route
                  path="/masterdata/customer/add"
                  element={<CustomerAdd />}
                />
                <Route
                  path="/masterdata/customer/detail/:id"
                  element={<CustomerDetail />}
                />
                <Route
                  path="/masterdata/customer/edit/:id"
                  element={<CustomerEdit />}
                />
              </Routes>
            </div>
          </div>
        )} */}
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          // Other code here
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <Sidebar setTitleMenu={setTitleMenu} />
            <div
              style={inlineStyles.container}
              className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0  max-h-screen overflow-y-scroll"
            >
              <div
                id="header"
                className="justify-between flex gap-5 pt-1.5 items-start max-md:max-w-full max-md:flex-wrap"
              >
                <div className="text-black text-2xl max-md:max-w-full max-md:mt-10">
                  {titleMenu}
                </div>
                <div></div>
              </div>
              <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route
                  path="/admin/companyprofile"
                  element={<CompanyProfileList />}
                />
                <Route
                  path="/admin/companyprofile/add"
                  element={<CompanyProfileAdd />}
                />
                <Route
                  path="/admin/companyprofile/edit/:id"
                  element={<CompanyProfileEdit />}
                />
                <Route
                  path="/admin/companyprofile/detail/:id"
                  element={<CompanyProfileDetail />}
                />
                <Route path="/admin/company" element={<CompanyList />} />
                <Route path="/admin/company/add" element={<CompanyAdd />} />
                <Route
                  path="/admin/company/edit/:id"
                  element={<CompanyEdit />}
                />
                <Route
                  path="/admin/company/detail/:id"
                  element={<CompanyDetail />}
                />
                <Route path="/admin/user" element={<UserList />} />
                <Route path="/admin/user/add" element={<UserAdd />} />
                <Route path="/admin/user/detail/:id" element={<UserDetail />} />
                <Route path="/admin/user/edit/:id" element={<UserEdit />} />
                <Route
                  path="/masterdata/productcategory"
                  element={<ProductCategory />}
                />
                <Route
                  path="/masterdata/productcategory/detail/:id"
                  element={<ProductCategoryDetail />}
                />
                <Route
                  path="/masterdata/productcategory/add"
                  element={<ProductCategoryAdd />}
                />
                <Route
                  path="/masterdata/productcategory/edit/:id"
                  element={<ProductCategoryEdit />}
                />
                <Route
                  path="/masterdata/productgroup"
                  element={<ProductGroupList />}
                />
                <Route
                  path="/masterdata/productgroup/add"
                  element={<ProductGroupAdd />}
                />
                <Route
                  path="/masterdata/productgroup/detail/:id"
                  element={<ProductGroupDetail />}
                />
                <Route
                  path="/masterdata/productgroup/edit/:id"
                  element={<ProductGroupEdit />}
                />

                <Route
                  path="/masterdata/product"
                  element={<ProductMasterList />}
                />
                <Route
                  path="/masterdata/product/add"
                  element={<ProductMasterAdd />}
                />
                <Route
                  path="/masterdata/product/detail/:id"
                  element={<ProductMasterDetail />}
                />
                <Route
                  path="/masterdata/product/edit/:id"
                  element={<ProductMasterEdit />}
                />

                <Route path="/masterdata/customer" element={<CustomerList />} />
                <Route
                  path="/masterdata/customer/add"
                  element={<CustomerAdd />}
                />
                <Route
                  path="/masterdata/customer/detail/:id"
                  element={<CustomerDetail />}
                />
                <Route
                  path="/masterdata/customer/edit/:id"
                  element={<CustomerEdit />}
                />

                <Route
                  path="/transaction/salesorder/add"
                  element={<SalesOrderAdd />}
                />
                <Route
                  path="/transaction/salesorder"
                  element={<SalesOrderList />}
                />
                <Route
                  path="/transaction/salesorder/detail/:id"
                  element={<SalesOrderDetail />}
                />
                <Route
                  path="/transaction/salesorder/edit/:id"
                  element={<SalesOrderEdit />}
                />
                <Route
                  path="/transaction/salesinvoice/detail/:id"
                  element={<SalesInvoiceDetail />}
                />
                <Route
                  path="/transaction/salesinvoice"
                  element={<SalesInvoiceList />}
                />
              </Routes>
            </div>
          </div>
        )}
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
