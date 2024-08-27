import React from "react";
import Sidebar from "../../components/chatcomponent/SideBar";
import ChatWindow from "../../components/chatcomponent/ChatWindow";
import MobileNavBar from "../../components/chatcomponent/MobileNav";
import { Outlet } from "react-router-dom";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <ChatWindow />
        <MobileNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default ChatPage;
