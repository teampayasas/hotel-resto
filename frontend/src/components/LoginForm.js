import React, { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        const LoggedIn = {
            email: email,
            password: password
        }
        console.log(LoggedIn)

        fetch('http://localhost:4000/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({LoggedIn})
        })
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e) }} className='login-form' action="/login" method='POST'>
            <label> Email: </label> <br/>
            <input type="text" value={email} required onChange={(e) => {handleEmailChange(e)}} name="email"></input> <br/>
            <label> Password: </label> <br/>
            <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} name="password"></input> <br/>
            <button type="submit"> Login </button>
        </form>
    )
}