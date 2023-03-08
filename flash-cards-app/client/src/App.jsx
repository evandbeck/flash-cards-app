import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

function App () {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

  // *Resolve This!*
  function componentDidMount() {
    loginStatus();
  };

  function loginStatus() {
    axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})
    .then(resp => {
      if (resp.data.logged_in) {
        handleLogin(resp);
      } else {
        handleLogout();
      }
    })
    .catch(error => console.log('api errors', error))
  };

  function handleLogin(data) {
    setIsLoggedIn(true);
    setUser(data.user);
  };

  function handleLogout() {
    setIsLoggedIn(false);
    setUser({});
  };

  // Routing logic based on wether user is logged in or not
  if(!isLoggedIn) {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/login' element={<Login handleLogin={handleLogin} />} />
            <Route exact path='/signup' element={<Signup handleLogin={handleLogin} />} />
          </Routes>
        </Router>
      </div>
    )
    } else {
      return (
        <div>
            <Dashboard user={user}/>
        </div>
      )
    }
};

export default App;


