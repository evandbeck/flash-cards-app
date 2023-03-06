import React, { useState, useHistory } from 'react';
import axios from 'axios';

function Signup ({handleLogin}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [errors, setErrors] = useState('');
    const history = useHistory();

    function handleSubmit (event) {
        event.preventDefault()
        // *Resolve This!*
        // const {username, email, password, password_confirmation} = this.state
        // setUsername(username);
        // setEmail(email);
        // setPassword(password);
        // setPassword_confirmation(password_confirmation);
        
        let user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        };

        axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
            .then(response => {
                if (response.data.status === 'created') {
                    handleLogin(response.data);
                    redirect();
                } else {
                    setErrors(response.data.errors);
                }
            })
            .catch(error => console.log('api errors:', error));
    };

    // *Resolve This!*
    function redirect () {
        history.push('/');
    }

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
    // const {username, email, password, password_confirmation} = this.state
    return (
        <div>
            <h1>Sign Up</h1>        
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
                <input
                    placeholder="password confirmation"
                    type="password"
                    name="password_confirmation"
                    value={password_confirmation}
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                />
                <button placeholder="submit" type="submit">Sign Up</button>
            </form>
        </div>
        );
    };

export default Signup;