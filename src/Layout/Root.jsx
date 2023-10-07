import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
