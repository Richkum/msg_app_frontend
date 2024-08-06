import React from "react";
import Sidebar from "../../components/chatpage/SideBar";
import ChatWindow from "../../components/chatpage/ChatWindow";
import MobileNavBar from "../../components/chatpage/MobileNav";

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
