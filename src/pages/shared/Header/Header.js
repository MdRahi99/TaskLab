import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { UserIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const menuItems = (
    <>
      <Link
        className="mr-5 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
        to="/"
      >
        Home
      </Link>
      <Link
        className="mr-5 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
        to="/contact"
      >
        Contact
      </Link>
      {user?.email ? (
        <>
          <Link
            to="/addTaskDetails"
            className="mr-5 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
          >
            Add Task
          </Link>
          <Link
            to="/myTaskDetails"
            className="mr-5 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
          >
            My Task
          </Link>
          <Link
            to="/completedTaskDetails"
            className="mr-5 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
          >
            Completed Task
          </Link>
          <button
            className="mr-5 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div>
      <header className="text-slate-800 bg-slate-200 body-font">
        <div className="mx-auto flex flex-wrap gap-3 p-3 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font bg-slate-800 text-slate-200 p-2 rounded font-medium items-center mb-4 md:mb-0"
          >
            <img className="w-10" src={logo} alt="" />
            <span className="ml-3 text-xl">TaskLab</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto mt-6 lg:my-0 flex flex-wrap gap-3 items-center justify-center">
            {menuItems}
          </nav>

          <div>
            {user?.email ? (
              <></>
            ) : (
              <>
                <div className="flex flex-col lg:flex-row gap-3 my-10 lg:my-0">
                  <input
                    className="placeholder:italic placeholder:text-slate-500 block bg-white border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-slate-800 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Add Task..."
                    type="text"
                    name="search"
                  />
                  <Link to="addTaskDetails" className="flex items-center justify-center bg-slate-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-slate-200 hover:text-slate-400 mt-1 lg:mt-0">
                    Add
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="">
            {user?.email ? (
              <div className="flex gap-2 items-center">
                <img className="h-8" src={user?.photoURL} alt="" />
                <p>{user.displayName}</p>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn flex flex-row items-center mx-4 hover:bg-slate-800 hover:text-slate-200 p-2 rounded"
              >
                Login
                <UserIcon className="h-4 w-4 text-light ml-3" />
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
