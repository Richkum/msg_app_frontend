import React, { useState } from "react";

const chats = [
  { id: 1, name: "Phylomina", lastMessage: "Hello there!" },
  { id: 2, name: "Above the law", lastMessage: "How are you?" },
  { id: 3, name: "Thiago Messi", lastMessage: "What's up?" },
  { id: 4, name: "Lamine Yamal", lastMessage: "I'm good!" },
  { id: 5, name: "Fermin Lopez", lastMessage: "I'm fine!" },
  { id: 6, name: "Neymar Jr", lastMessage: "I'm okay!" },
  { id: 7, name: "Leo Messi", lastMessage: "Bye!" },
  {
    id: 8,
    name: "Larmar",
    lastMessage: "Goodbye! See you when you come back from your trip ",
  },
  { id: 10, name: "Gotze", lastMessage: "Where you at?" },
  { id: 11, name: "Mbappe", lastMessage: "You still need the 10 million?" },
  { id: 12, name: "Almanda", lastMessage: "I hope to see you today!" },
];

const ChatList = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="h-full overflow-y-auto">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => handleChatClick(chat)}
          className={`py-5 hover:bg-blue-400 cursor-pointer rounded-lg flex items-center gap-4 border-b border-blue-600 transition-all ${
            selectedChat && selectedChat.id === chat.id ? "bg-blue-400" : ""
          }`}
        >
          <img
            className="w-16 h-16 rounded-full"
            src="images/blog-header.jpg"
            alt={chat.name}
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{chat.name}</h3>
            <p className="text-gray-100">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
