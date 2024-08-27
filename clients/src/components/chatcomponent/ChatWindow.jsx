import React from "react";
import {
  FaPaperPlane,
  FaSmile,
  FaMicrophone,
  FaPaperclip,
} from "react-icons/fa";

const ChatWindow = () => {
  return (
    <div className="flex flex-col flex-grow bg-white">
      {/* Header */}
      <div className="bg-blue-500 sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <img
            className="w-16 h-16 rounded-full"
            src="images/blog-header.jpg"
            alt="User Profile"
          />
          <p className="font-bold font-mono text-white">User's Name</p>
          <button className="text-white text-xl">...</button>
        </div>
        <div>
          <p className="px-4 py-2 text-white">Last Seen</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-grow overflow-y-auto p-4">
        <h2 className="text-gray-600 text-center font-semibold">
          Select a chat to start messaging
        </h2>
        {/* Add messages here */}
      </div>

      {/* Input Area */}
      <div className="p-2 flex items-center border-t border-gray-300 bg-blue-300">
        <button className="p-2">
          <FaSmile className="text-gray-600" />
        </button>
        <button className="p-2">
          <FaPaperclip className="text-gray-600" />
        </button>
        <button className="p-2">
          <FaMicrophone className="text-gray-600" />
        </button>
        <input
          type="text"
          className="flex-grow p-3 bg-gray-100 rounded-full outline-none mx-2"
          placeholder="Enter a Message"
        />
        <button className="p-2">
          <FaPaperPlane className="text-blue-700" />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
