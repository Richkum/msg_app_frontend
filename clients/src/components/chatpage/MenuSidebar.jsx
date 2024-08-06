import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";

const MenuSidebar = () => {
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
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-end"
        >
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
              <li className="p-2 border-b border-t">settings</li>
              <li className="p-2 border-b">Profile</li>
              <li className="p-2 border-b">Blocked users</li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MenuSidebar;
