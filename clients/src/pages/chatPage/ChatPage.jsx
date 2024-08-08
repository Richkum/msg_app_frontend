import React from "react";
import Sidebar from "../../components/chatcomponent/SideBar";
import ChatWindow from "../../components/chatcomponent/ChatWindow";
import MobileNavBar from "../../components/chatcomponent/MobileNav";

const ChatPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <ChatWindow />
      <MobileNavBar />
    </div>
  );
};

export default ChatPage;
