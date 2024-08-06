import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ChatPage from "./pages/chatPage/ChatPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chatPage" element={<ChatPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
