import avatar from "../assets/icons/avatar.png";
import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Switch from "./Switch";

const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <>
      <nav className="w-full flex flex-wrap z-10 items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg fixed navbar navbar-expand-lg ">
        <div className="container-fluid w-full flex items-center justify-between px-6">
          <Link className="text-2xl text-white pr-2 font-semibold" to="/">
            React Movie App
          </Link>

          <div className="flex items-center relative">
            {/* Icon */}
            {currentUser && (
              <h5 className="mr-2 capitalize">{currentUser.displayName}</h5>
            )}
            <Switch/>
            <div className="dropdown relative">
              <span
                className="dropdown-toggle z-10 flex items-center hidden-arrow"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={currentUser?.photoURL || avatar}
                  className="rounded-full"
                  style={{ height: 25, width: 25 }}
                  alt="USER"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </span>
              <ul
                className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <span
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    role="button"
                    onClick={()=>logOut()}
                  >
                    Log Out
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>

      <div className="h-[55px]"></div>
    </>
  );
};

export default Navbar;
