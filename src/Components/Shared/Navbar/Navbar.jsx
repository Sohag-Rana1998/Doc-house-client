import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/appointment"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Appointment
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-center font-bold text-white ">
      <div className="navbar w-full container fixed z-50 mx-auto ">
        <div className="navbar-start">
          <a className="hover:bg-slate-400 text-xl font-bold flex items-center gap-2">
            <img
              src="https://i.postimg.cc/3Rrms5WT/Group-1.png"
              className="w-10 h-10"
              alt=""
            />
            <h3>
              <span className="text-[#F7A582]">Doc</span> House
            </h3>
          </a>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end  flex justify-end md:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44 right-0"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
