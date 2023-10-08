import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import defaultUserPhoto from "../assets/user.png";

const Navbar = () => {
  // location.reload();
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error.message));
  };
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
    <div className=" navbar bg-color-primary-dark pl-[1%] pr-[2%] md:px-[5%]">
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
        <a className="text-color-secondary font-bold ml-2">
          <span className="text-3xl md:text-5xl h-fit">C</span>
          <span className="text-xl md:text-3xl h-fit">VENTS</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <p className="text-sm font-semibold text-color-secondary mr-1">
            {user.displayName}
          </p>
        ) : (
          ""
        )}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full mr-1">
            <img src={user ? user?.photoURL : defaultUserPhoto} />
          </div>
        </label>
        {user ? (
          <button onClick={handleLogout} className="btns px-2">
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btns px-2">Login</button>
          </Link>
        )}
        {/* <Link to="/login">
          <button className="btns px-2">Login</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
