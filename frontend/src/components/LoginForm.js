// Look onto database and match every character that the user has entered.
// Retrieve from database and check match
//indexof('@')
// Regular expression
//Patter between /`{}$/


import React, { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/userData/incoming_webhook/LogInUser', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email: email, password: password})
        })

        .then((response) => response.json())
        .then((result) => {
            if (result !== null) {
                console.log(result)
                console.log('Logged In :)')
                console.log(`Welcome ${result.name}`)
            } else {
                console.log('Error logging in :(')
            }
        })


        setEmail("")
        setPassword("")
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e) }} className='login-form' action="/login" method='POST'>
            <label> Email: </label> <br/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email"></input> <br/>
            <label> Password: </label> <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"></input> <br/>
            <button type="submit"> Login </button>
        </form>
    )
}