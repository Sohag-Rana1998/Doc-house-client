import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className=" w-full">
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
