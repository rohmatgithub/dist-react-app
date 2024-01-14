import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";
import ProductCategory from "./module-master-data/productCategoryList";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import ProductCategoryDetail from "./module-master-data/productCategoryAdd";
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
const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState("");
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

  const testClicks = (value) => {
    console.log("Menu: " + value);
  };
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    setisAuthenticated(auth.isLogin);
  }, []);

  useEffect(() => {
    setisAuthenticated(auth.isLogin);
  }, [auth]);

  return (
    <div className="bg-stone-50 max-md:pr-5">
      <Router>
        {!isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <Sidebar setTitleMenu={setTitleMenu} />
            <div
              style={inlineStyles.container}
              className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0"
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
                  path="/masterdata/productcategory"
                  element={<ProductCategory />}
                />
                <Route
                  path="/masterdata/productcategory/detail"
                  element={<ProductCategoryDetail />}
                />
                <Route
                  path="/masterdata/productcategory/add"
                  element={<ProductCategoryAdd />}
                />
                <Route
                  path="/masterdata/productgroup"
                  element={<ProductGroupList />}
                />
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
              </Routes>
            </div>
            {/* <AlertError /> */}
          </div>
        )}
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
