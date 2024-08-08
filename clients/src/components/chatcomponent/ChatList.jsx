import React from "react";

const chats = [
  { id: 1, name: "Chat 1", lastMessage: "Hello there!" },
  { id: 2, name: "Chat 2", lastMessage: "How are you?" },
  { id: 3, name: "Chat 3", lastMessage: "What's up?" },
  { id: 4, name: "Chat 4", lastMessage: "I'm good!" },
  { id: 5, name: "Chat 5", lastMessage: "I'm fine!" },
  { id: 6, name: "Chat 6", lastMessage: "I'm okay!" },
  { id: 7, name: "Chat 7", lastMessage: "Bye!" },
  {
    id: 8,
    name: "Chat 8",
    lastMessage: "Goodbye! See you when you come back from your trip ",
  },
];

const ChatList = () => {
  return (
    <div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="p-2 hover:bg-blue-400 cursor-pointer rounded-lg"
        >
          <h3 className="font-semibold">{chat.name}</h3>
          <p className="text-gray-600">{chat.lastMessage}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
