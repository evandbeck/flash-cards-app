import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({})

// *Resolve This!*
  function componentDidMount() {
    loginStatus()
  };

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})
    .then(resp => {
      if (resp.data.logged_in) {
        handleLogin(resp)
      } else {
        handleLogout()
      }
    })
    .catch(error => console.log('api errors', error))
  };

  handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  };

  handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  )
};

export default App;


