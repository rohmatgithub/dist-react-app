import ProductCategory from "./module-master-data/product-category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
const App = () => {
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
  return (
    <div className="bg-stone-50 max-md:pr-5">
      <Router>
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
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/masterdata/productcategory"
                element={<ProductCategory />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
