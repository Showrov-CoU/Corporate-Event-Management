import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="mr-5 text-lg">
        <NavLink to="/">
          {({ isActive }) => (
            <span className={isActive ? "text-color-secondary" : ""}>Home</span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-lg">
        <NavLink to="/services">
          {({ isActive }) => (
            <span className={isActive ? "text-color-secondary" : ""}>
              Services
            </span>
          )}
        </NavLink>
      </li>
      <li className="mr-5 text-lg">
        <NavLink to="/gallery">
          {({ isActive }) => (
            <span className={isActive ? "text-color-secondary" : ""}>
              Gallery
            </span>
          )}
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" navbar bg-color-primary-light pl-[1%] pr-[2%] md:px-[5%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="  dropdown-content mt-3 z-[1] p-2 shadow bg-color-primary-light rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="text-color-secondary font-bold ml-1">
          <span className="text-3xl md:text-5xl h-fit">C</span>
          <span className="text-xl md:text-3xl h-fit">VENTS</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btns px-2">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
