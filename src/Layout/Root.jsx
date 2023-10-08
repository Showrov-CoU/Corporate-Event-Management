import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
