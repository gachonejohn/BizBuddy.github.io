import React, { useState } from 'react';

const UserTypeIcon = ({ userType }) => {
  switch (userType) {
    case 'entrepreneur':
      return <span className="text-green-500">💡</span>;
    case 'mentor':
      return <span className="text-blue-500">🧠</span>;
    case 'investor':
      return <span className="text-yellow-500">💰</span>;
    default:
      return null;
  }
};

const MenuItem = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    <span className="mr-2">{icon}</span>
    {text}
  </button>
);

const HomePage = ({ user = {} }) => {
  const [profilePic, setProfilePic] = useState(user?.profilePic || null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const firstName = user?.name ? user.name.split(' ')[0] : 'Guest';
  const userType = user?.type || 'guest';

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        // Here you would typically upload the file to your server
        // and update the user's profile in the database
      };
      reader.readAsDataURL(file);
    }
  };

  const renderUserSpecificActions = () => {
    switch (userType) {
      case 'entrepreneur':
        return (
          <>
            <MenuItem icon="🤝" text="Find a Mentor" onClick={() => console.log('Find a Mentor')} />
            <MenuItem icon="💸" text="Explore Funding" onClick={() => console.log('Explore Funding')} />
            <MenuItem icon="📚" text="Access Resources" onClick={() => console.log('Access Resources')} />
            <MenuItem icon="💬" text="Join Discussions" onClick={() => console.log('Join Discussions')} />
          </>
        );
      case 'mentor':
        return (
          <>
            <MenuItem icon="🧑‍🤝‍🧑" text="My Mentees" onClick={() => console.log('My Mentees')} />
            <MenuItem icon="📅" text="Schedule Sessions" onClick={() => console.log('Schedule Sessions')} />
            <MenuItem icon="📝" text="Provide Resources" onClick={() => console.log('Provide Resources')} />
          </>
        );
      case 'investor':
        return (
          <>
            <MenuItem icon="🔍" text="Explore Startups" onClick={() => console.log('Explore Startups')} />
            <MenuItem icon="📊" text="My Investments" onClick={() => console.log('My Investments')} />
            <MenuItem icon="📈" text="Market Trends" onClick={() => console.log('Market Trends')} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-gray-800">EntrepreneurshipHub</h1>
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
                  <span className="mt-1 text-xs text-gray-600 flex items-center">
                    {firstName} <UserTypeIcon userType={userType} />
                  </span>
                </button>
                {isProfileOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <div className="px-4 py-2 text-sm text-gray-700">
                        <p className="font-medium">{user?.name || 'Guest'}</p>
                        <p className="text-xs">{user?.email || 'No email provided'}</p>
                      </div>
                      <div className="border-t border-gray-100"></div>
                      {renderUserSpecificActions()}
                      <div className="border-t border-gray-100"></div>
                      <label htmlFor="profile-upload" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        <span className="inline-block w-4 h-4 mr-2">⚙️</span>
                        Change Profile Picture
                      </label>
                      <input
                        id="profile-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <span className="inline-block w-4 h-4 mr-2">🚪</span>
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
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to EntrepreneurshipHub, {firstName}!</h2>
          <p className="mt-2 text-gray-600">
            {userType === 'entrepreneur' && "Explore mentorship, funding opportunities, and valuable resources to grow your startup."}
            {userType === 'mentor' && "Connect with aspiring entrepreneurs, share your expertise, and make a difference in the startup ecosystem."}
            {userType === 'investor' && "Discover promising startups, track your investments, and stay updated on the latest market trends."}
            {userType === 'guest' && "Join our community to access mentorship, funding, and resources for your entrepreneurial journey."}
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;