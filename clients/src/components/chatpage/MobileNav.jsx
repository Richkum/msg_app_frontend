import React from "react";
import {
  HomeIcon,
  PlusCircleIcon,
  UserIcon,
  ChatIcon,
  CogIcon,
} from "@heroicons/react/outline";

const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-500 border-t border-gray-200 p-4 flex justify-around md:hidden">
      {/* <HomeIcon className="h-6 w-6 text-gray-600" /> */}
      <ChatIcon className="h-6 w-6 text-gray-600" />
      <PlusCircleIcon className="h-6 w-6 text-gray-600" />
      <CogIcon className="h-6 w-6 text-gray-600" />
      <UserIcon className="h-6 w-6 text-gray-600" />
    </div>
  );
};

export default MobileNavBar;
