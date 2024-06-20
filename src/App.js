import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'

const App = () => {
  const user = {
    name:"tony",
    gmail:"tonystark@123",
    pass:"tony123",
  };
  return (
    <div className='app'>
      <Router>
        {
          !user ?
            //login page
            <h1>Login</h1>
            :
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        }
      </Router>
    </div>

  )
}

export default App