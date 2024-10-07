import React from 'react';
import LoginSignupPage from './LoginSignUpPage';

import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/logIn');
};

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <header className="bg-white shadow-lg w-full py-4">
                <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                   <img src="../assets/logo.svg" alt="" />
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <li className="text-gray-600 hover:text-indigo-600 cursor-pointer">About</li>
                        <li className="text-gray-600 hover:text-indigo-600 cursor-pointer" >Contact</li>
                        <button onClick={handleLoginClick} className="mt-6 bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-500 transition md:px-6 md:py-1">
                    Login
                </button>
                      
                    </ul>
                </nav>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl lg:text-5xl">Welcome to Your Entrepreneurial Journey</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600 max-w-xs md:max-w-xl">
                    Join a community of innovators and creators. We provide resources, mentorship, and networking opportunities to help you launch and grow your business.
                </p>
                <button onClick={handleLoginClick} className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition md:px-6 md:py-3">
                    Get Started
                </button>
            </main>

            <footer className="bg-white py-4 w-full">
                <p className="text-center text-gray-600 text-sm md:text-base">
                    © BizBuddy. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default LandingPage;
