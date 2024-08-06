import React from "react";
import StoryIcon from "./StoryIcon";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";
import MenuSidebar from "./MenuSidebar";

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col md:w-1/3 lg:w-1/4 bg-blue-500 h-screen p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Chats</h2>
        <StoryIcon />
        <MenuSidebar />
      </div>
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default Sidebar;
