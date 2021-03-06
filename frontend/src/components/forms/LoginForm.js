import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    function RedirectUser () {navigate("/user")}
    function RedirectAdmin () {navigate("/admin")}

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
                if (result.userRole === "admin") {
                    console.log('Welcome admin');
                    alert('Welcome admin')
                    RedirectAdmin()
                } if (result.userRole === "user") {
                    console.log('hola user')
                    alert(`Welcome ${result.name}`)
                    RedirectUser()
                    console.log(`Hola ${result.name}, this is your id ${result._id.$oid}`)
                }
            } else {
                console.log('Error logging in :(')
                alert('Error logging in :(')
            }
        })
    }

    return (
        <form onSubmit={(e) => {handleSubmit(e) }} className='login-form' action="/login" method='POST'>
            <label> Email: </label> <br/>
            <input type="text" placeholder="email@sample.com" value={email} onChange={(e) => setEmail(e.target.value)} name="email"></input> <br/>
            <label> Password: </label> <br/>
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} name="password"></input> <br/>
            <button type="submit" id="submit-login"> Log In </button>
        </form>
    )
}