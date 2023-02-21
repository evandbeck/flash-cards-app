import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  };

  componentDidMount() {
    this.loginStatus()
  };

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
    {withCredentials: true})
    .then(resp => {
      if (resp.data.logged_in) {
        this.handleLogin(resp)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors', error))
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  };

render() {
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
};

export default App;


