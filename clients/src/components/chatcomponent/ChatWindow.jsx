// import React, { useState, useEffect } from "react";
// import {
//   FaPaperPlane,
//   FaSmile,
//   FaMicrophone,
//   FaPaperclip,
//   FaPhone,
// } from "react-icons/fa";
// import EmojiPicker from "emoji-picker-react";
// import io from "socket.io-client"; // for real-time updates
// import UploadMedia from "./Media"; // Import the UploadMedia modal

// const socket = io("http://localhost:3000"); // assuming your server is running on localhost:3000

// const ChatWindow = ({ selectedChat }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

//   useEffect(() => {
//     if (selectedChat) {
//       // Fetch chat messages when a chat is selected
//       fetchChatMessages(selectedChat.id);
//     }
//   }, [selectedChat]);

//   // Fetch chat messages from the backend (replace with actual API)
//   const fetchChatMessages = async (chatId) => {
//     // Fetch logic for loading previous messages from the server (static for now)
//     // Replace with actual API call
//     const fetchedMessages = [
//       { id: 1, sender: "Me", content: "Hey, what's up?" },
//       { id: 2, sender: selectedChat.name, content: selectedChat.lastMessage },
//     ];
//     setMessages(fetchedMessages);
//   };

//   // Handle sending a message
//   const sendMessage = () => {
//     if (!inputValue.trim()) return;

//     const newMessage = {
//       id: Date.now(),
//       sender: "Me",
//       content: inputValue,
//     };

//     // Emit the message using WebSockets to update in real time
//     socket.emit("sendMessage", { ...newMessage, receiverId: selectedChat.id });

//     // Clear input
//     setInputValue("");

//     // Append message to the local state
//     setMessages([...messages, newMessage]);
//   };

//   // Handle receiving a new message (real-time)
//   useEffect(() => {
//     socket.on("receiveMessage", (message) => {
//       if (message.receiverId === selectedChat.id) {
//         setMessages((prevMessages) => [...prevMessages, message]);
//       }
//     });
//   }, [selectedChat]);

//   const handleEmojiClick = (emojiObject) => {
//     setInputValue(inputValue + emojiObject.emoji);
//   };

//   const showEmojiPicker = () => {
//     setIsEmojiPickerVisible(true);
//   };

//   const hideEmojiPicker = () => {
//     setIsEmojiPickerVisible(false);
//   };

//   const openUploadModal = () => {
//     setIsUploadModalOpen(true);
//   };

//   const closeUploadModal = () => {
//     setIsUploadModalOpen(false);
//   };

//   return (
//     <div className="flex flex-col flex-grow bg-white h-full">
//       {/* Top bar with selected user's name */}
//       <div onClick={hideEmojiPicker} className="bg-blue-500 sticky top-0 z-10">
//         <div className="flex items-center justify-between p-4 md:p-5 lg:p-6">
//           <img
//             className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
//             src="images/blog-header.jpg"
//             alt="User Profile"
//           />
//           <p className="font-bold font-mono text-white text-sm md:text-lg lg:text-xl truncate">
//             {selectedChat ? selectedChat.name : "User's Name"}
//           </p>
//           <button className="text-white text-xl lg:text-2xl">
//             <FaPhone />
//           </button>
//         </div>
//         <div className="px-4 py-2 text-white lg:px-6">
//           <p className="text-xs md:text-sm lg:text-base">Last Seen</p>
//         </div>
//       </div>

//       {/* Chat messages */}
//       <div className="flex-grow overflow-y-auto p-4">
//         {messages.length > 0 ? (
//           messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`my-2 p-2 md:p-3 rounded-lg flex ${
//                 msg.sender === "Me"
//                   ? "justify-end" // Align your messages to the right
//                   : "justify-start" // Align other messages to the left
//               }`}
//             >
//               <div
//                 className={`p-2 md:p-3 rounded-lg break-words ${
//                   msg.sender === "Me"
//                     ? "bg-blue-200 text-right"
//                     : "bg-gray-200 text-left"
//                 }`}
//                 style={{ maxWidth: "75%" }} // Limit message width to 75% to prevent overflow
//               >
//                 <p className="font-bold mb-1 text-xs md:text-sm lg:text-base">
//                   {msg.sender}
//                 </p>
//                 <p className="text-xs md:text-sm lg:text-base">{msg.content}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h2 className="text-gray-600 text-center font-semibold">
//             Select a chat to start messaging
//           </h2>
//         )}
//       </div>

//       {/* Input area */}
//       <div className="p-2 md:p-3 flex items-center border-t border-gray-300 bg-blue-300 relative">
//         <button className="p-2" onClick={showEmojiPicker}>
//           <FaSmile className="text-gray-600 text-lg md:text-xl" />
//         </button>
//         {isEmojiPickerVisible && (
//           <div className="absolute bottom-full mb-2 right-4 z-20">
//             <EmojiPicker onEmojiClick={handleEmojiClick} />
//           </div>
//         )}
//         <button className="p-2" onClick={openUploadModal}>
//           <FaPaperclip className="text-gray-600 text-lg md:text-xl" />
//         </button>
//         <button className="p-2">
//           <FaMicrophone className="text-gray-600 text-lg md:text-xl" />
//         </button>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className="flex-grow p-2 md:p-3 bg-gray-100 rounded-full outline-none mx-2"
//           placeholder="Enter a Message"
//         />
//         <button className="p-2" onClick={sendMessage}>
//           <FaPaperPlane className="text-blue-700 text-lg md:text-xl" />
//         </button>
//       </div>

//       {/* Upload Media Modal */}
//       <UploadMedia isOpen={isUploadModalOpen} onClose={closeUploadModal} />
//     </div>
//   );
// };

// export default ChatWindow;

import React, { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaSmile,
  FaMicrophone,
  FaPaperclip,
  FaPhone,
  FaTrashAlt,
} from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import io from "socket.io-client";
import UploadMedia from "./Media";
import VoiceRecorder from "./VoiceRecoder";
const socket = io("http://localhost:3000");

const ChatWindow = ({ selectedChat }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false); // Track recording state
  const [recordedAudio, setRecordedAudio] = useState(null); // Store recorded audio
  const [audioBlob, setAudioBlob] = useState(null); // Store audio blob to send

  useEffect(() => {
    if (selectedChat) {
      fetchChatMessages(selectedChat.id);
    }
  }, [selectedChat]);

  const fetchChatMessages = async (chatId) => {
    const fetchedMessages = [
      { id: 1, sender: "Me", content: "Hey, what's up?" },
      { id: 2, sender: selectedChat.name, content: selectedChat.lastMessage },
    ];
    setMessages(fetchedMessages);
  };

  const sendMessage = () => {
    if (!inputValue.trim() && !audioBlob) return; // Ensure there's a text message or audio to send

    const newMessage = {
      id: Date.now(),
      sender: "Me",
      content: inputValue || "Voice message", // If no text, label as "Voice message"
      audio: audioBlob ? URL.createObjectURL(audioBlob) : null, // Include audio if present
    };

    socket.emit("sendMessage", { ...newMessage, receiverId: selectedChat.id });

    setInputValue("");
    setRecordedAudio(null); // Clear after sending
    setAudioBlob(null); // Clear the blob
    setMessages([...messages, newMessage]);
  };

  // Handle real-time message reception
  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      if (message.receiverId === selectedChat.id) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }
    });
  }, [selectedChat]);

  // Handle emoji picker
  const handleEmojiClick = (emojiObject) => {
    setInputValue(inputValue + emojiObject.emoji);
  };

  // Start or stop recording
  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  // When recording finishes
  const handleStopRecording = (blob) => {
    const url = URL.createObjectURL(blob);
    setRecordedAudio(url);
    setAudioBlob(blob);
    setIsRecording(false);
  };

  // Delete the recording
  const deleteRecording = () => {
    setRecordedAudio(null);
    setAudioBlob(null);
  };

  return (
    <div className="flex flex-col flex-grow bg-white h-full">
      {/* Top bar */}
      <div
        onClick={() => setIsEmojiPickerVisible(false)}
        className="bg-blue-500 sticky top-0 z-10"
      >
        <div className="flex items-center justify-between p-4 md:p-5 lg:p-6">
          <img
            className="w-12 h-12 rounded-full"
            src="images/blog-header.jpg"
            alt="User Profile"
          />
          <p className="font-bold text-white">
            {selectedChat ? selectedChat.name : "User's Name"}
          </p>
          <button className="text-white">
            <FaPhone />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`my-2 flex ${
              msg.sender === "Me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                msg.sender === "Me" ? "bg-blue-200" : "bg-gray-200"
              }`}
            >
              <p className="font-bold">{msg.sender}</p>
              <p>{msg.content}</p>
              {msg.audio && (
                <audio controls>
                  <source src={msg.audio} type="audio/mp3" />
                </audio>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input and controls */}
      <div className="p-2 flex items-center border-t bg-blue-300 relative">
        <button className="p-2" onClick={() => setIsEmojiPickerVisible(true)}>
          <FaSmile className="text-lg" />
        </button>
        {isEmojiPickerVisible && (
          <div className="absolute bottom-full mb-2 right-4 z-20">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <button className="p-2" onClick={() => setIsUploadModalOpen(true)}>
          <FaPaperclip className="text-lg" />
        </button>

        {/* Microphone Button */}
        <button className="p-2" onClick={toggleRecording}>
          <FaMicrophone className="text-lg" />
        </button>

        {/* Voice Recorder */}
        {isRecording && (
          <div>
            <VoiceRecorder
              onRecord={setAudioBlob}
              onStop={handleStopRecording}
            />
          </div>
        )}

        {/* If a recording exists, show the preview */}
        {recordedAudio && (
          <div className="flex items-center ml-2">
            <audio controls src={recordedAudio} className="mr-2"></audio>
            <button onClick={deleteRecording}>
              <FaTrashAlt className="text-red-500" />
            </button>
          </div>
        )}

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow mx-2 p-2 bg-gray-100 rounded-full outline-none"
          placeholder="Enter a message"
        />

        <button className="p-2" onClick={sendMessage}>
          <FaPaperPlane className="text-blue-700 text-lg" />
        </button>
      </div>

      {/* Upload Modal */}
      <UploadMedia
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />
    </div>
  );
};

export default ChatWindow;
