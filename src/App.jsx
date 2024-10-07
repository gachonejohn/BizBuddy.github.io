import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginSignupPage from './pages/LoginSignUpPage'
import HomePage from './pages/HomePage'
import MentorshipMatch from './components/MentorshipMatch'
import FundingPlatform from './components/FundingPlatform'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<LandingPage/>}/>
          <Route path='/' element = {<LandingPage/>} />
          <Route path='/LogIn' element = {<LoginSignupPage/>} />
          <Route path='/home' element = {<HomePage/>}></Route>
          <Route path='mentor' element = {<MentorshipMatch/>}></Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
