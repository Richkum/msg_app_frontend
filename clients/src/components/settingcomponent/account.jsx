import React, { useState } from "react";
import ProfilePicture from "./userProfile/ProfilePicture";
import UserName from "./userProfile/UserName";
import StatusMessage from "./userProfile/StatusMessage";
import Bio from "./userProfile/Bio";

const UpdateProfile = () => {
  const [user, setUser] = useState({
    username: "Username",
    status_message: "Status Message",
    bio: "My bio",
    profile_picture: "/images/blog-header.jpg",
  });

  const handleUpdate = (key, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-4">
          <ProfilePicture currentPicture={user.profile_picture} />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col">
            <UserName
              currentUsername={user.username}
              onUpdate={(value) => handleUpdate("username", value)}
            />
          </div>
          <div className="flex flex-col">
            <Bio
              currentBio={user.bio}
              onUpdate={(value) => handleUpdate("bio", value)}
            />
          </div>
          <div className="flex flex-col">
            <StatusMessage
              currentStatus={user.status_message}
              onUpdate={(value) => handleUpdate("status_message", value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
