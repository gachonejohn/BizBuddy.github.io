import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
      <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-700"><strong>User Type:</strong> {user.type}</p>
    </div>
  );
};

export default UserProfile;
