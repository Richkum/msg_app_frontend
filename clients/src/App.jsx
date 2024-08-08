import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ChatPage from "./pages/chatPage/ChatPage";
import ReserPassword from "./pages/resertPass/ReserPassword";
import GeneralSettings from "./pages/settings/Settings";
import AccountSetting from "./pages/settings/account-settings/AccountSetting";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/chatPage" element={<ChatPage />} />
            <Route path="/resertPass" element={<ReserPassword />} />
            <Route path="/settings" element={<GeneralSettings />} />
            <Route path="/account-settings" element={<AccountSetting />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
