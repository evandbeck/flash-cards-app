import React, { useState, useHistory } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login ({handleLogin}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    // const history = useHistory();

    function handleSubmit(event) {
        event.preventDefault()
        // setUsername(username);
        // setEmail(email);
        // setPassword(password);

        let user = {
            username: username,
            email: email,
            password: password
        };

        axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.logged_in) {
                    handleLogin(response.data);
                    // redirect();
                } else {
                    setErrors(response.data.errors);
                }
                })
            .catch(error => console.log('api errors:', error))
            };

    // *Resolve This!*
    // function redirect() {
    //     history.push('/')
    // };

     // *Resolve This!*
     function handleErrors () {
        return (
          <div>
            <ul>
                {this.state.errors.map((error) => {
                    return <li key={error}>{error}</li>
                })
                };
            </ul> 
          </div>
        )
    };

    // *Resolve This!*
    // const {username, email, password} = this.state
    return (
        <div>
            <h1>Log In</h1>        
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />         
                <button placeholder="submit" type="submit">Log In</button>          
                <div>
                    or <Link to='/signup'>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;