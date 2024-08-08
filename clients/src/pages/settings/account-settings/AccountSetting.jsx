import React from "react";
import UpdateProfile from "../../../components/settingcomponent/account";

function AccountSetting() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-green-500 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Account Settings
        </h1>
        <UpdateProfile />
      </div>
    </div>
  );
}

export default AccountSetting;
