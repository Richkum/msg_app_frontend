import React, { useState, useContext } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const MenuSidebar = () => {
  const { logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openMenu}>
        <MenuIcon className="h-8 w-8 text-gray-600" />
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 bg-white h-full p-4 shadow-xl">
            <button onClick={closeMenu} className="text-right">
              Close
            </button>
            <div className="flex flex-col space-y-2 py-2">
              <img
                src="images/blog-header.jpg"
                alt="profile"
                className="w-24 h-24 rounded-full"
              />
              <p className="text-xl font-bold">Username</p>
              <p className="text-sm">
                Bio about you. Add a short description about yourself
              </p>
            </div>
            <ul className="mt-4">
              <Link to={"/settings"}>
                <li className="p-2 border-b border-t hover:text-blue-500">
                  settings
                </li>
              </Link>
              <li className="p-2 border-b">Profile</li>
              <li className="p-2 border-b">Blocked users</li>
              <Link to={"/"}>
                <button
                  onClick={logout}
                  className="w-full max-w-sm bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  <svg
                    className="w-6 h-6 inline-block mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  Logout
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MenuSidebar;
