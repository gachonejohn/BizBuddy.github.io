import React, { useState } from 'react';

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FundingPlatform from '../components/FundingPlatform';
import { BrowserRouter } from 'react-router-dom';
import ResourceLibrary from '../components/ResourceLibrary';
import LoginSignupPage from './LoginSignUpPage';

const HomePage = ({ user = {} }) => {
  const [profilePic, setProfilePic] = useState(user?.profilePic || null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Extract first name from the full name
  const firstName = user?.name ? user.name.split(' ')[0] : 'Guest';

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        //to upload upload the file to my server
        // and update the user's profile in the database
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Navbar/>
            </div>
            <div className="ml-6 flex items-center">
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex flex-col items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                >
                  {profilePic ? (
                    <img className="h-8 w-8 rounded-full object-cover" src={profilePic} alt="Profile" />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600 text-xs">
                        {firstName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <span className="mt-1 text-xs text-gray-600">{firstName}</span>
                </button>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <div className="px-4 py-2 text-sm text-gray-700">
                        <p className="font-medium">{user?.name || 'Guest'}</p>
                        <p className="text-xs">{user?.email || 'No email provided'}</p>
                      </div>
                      <div className="border-t border-gray-100"></div>
                      <label htmlFor="profile-upload" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <span className="inline-block w-4 h-4 mr-2"></span>
                        Change profile
                      </label>
                      <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span className="inline-block w-4 h-4 mr-2"></span>
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Hero/>
        <FundingPlatform/>
        <ResourceLibrary/>
      </main>
    </div>
  );
};

export default HomePage;