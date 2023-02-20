import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

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
    axios.get('http://localhost:3001/logged in',
    {withCredentials: true})
    .then(resp => {
      if (resp.data.logged_in) {
        this.handleLogin(response)
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={isLoggedin}/>
          <Route exact path='/login' component={isLoggedIn}/>
          <Route exact path='/signup' component={isLoggedIn}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
  };
};

export default App;


