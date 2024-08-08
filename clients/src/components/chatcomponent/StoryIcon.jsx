import React from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

const StoryIcon = () => {
  return (
    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-white cursor-pointer">
      <PlusCircleIcon className="h-6 w-6 text-gray-600" />
    </div>
  );
};

export default StoryIcon;
