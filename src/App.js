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
const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState("");
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
            <Sidebar />
            <div
              style={inlineStyles.container}
              className="flex flex-col items-stretch w-[83%] ml-5 max-md:w-full max-md:ml-0"
            >
              <div
                id="header"
                className="justify-between flex gap-5 pt-1.5 items-start max-md:max-w-full max-md:flex-wrap"
              >
                <div className="text-black text-2xl max-md:max-w-full max-md:mt-10">
                  Sales Information
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
              </Routes>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
};

export default App;
