// https://codezup.com/forms-in-react-js-example-login-signup-form/#:~:text=When%20we%20talk%20about%20forms%20in%20React%20JS,handlers%20in%20the%20onChange%20attribute%20of%20the%20element.
import React, { useState, useEffect } from 'react';

function SignUp() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

  // function to update state of name with value enter by user in form
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    }
    
    const handleSubmit = (e) => {

        //Validate Email
        const emailPattern = /^([a-zA-Z0-9.]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/ //console.log(emailPattern)
        const emailHandle = emailPattern.test(email) //console.log(emailHandle)
        if (emailHandle) {
            console.log (`Email Valid`)
        } else {
            alert (`Try again`)
        }

        //Validate Password
        const passwordPattern = /^[A-Za-z0-9/.-_$£%#]{5,30}$/
        const passwordHandle = passwordPattern.test(password) 
        if (passwordHandle) {
            console.log('Good password')
        } else {
            alert('Weak password')
        }
        
        if (password != confPassword) {
            alert("Password Not Match");
        } else {
            console.log('A form was submitted with Name :"' + name + '" ,Surname :"' + surname + '" and Email :"' + email + '"');
        } e.preventDefault();

        fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/userData/incoming_webhook/LogInUser', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email:email})
        })
        
        .then((response) => response.json())
        .then((result) => {
            // if (result === null) {
                fetch('https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/userData/incoming_webhook/InsertUser', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({name:name, surname:surname, email:email, password:password, userRole:'user'})
                }) 
                alert('User signed up!')
            //} 
            // else {
            //     alert('This email is currently in use.')
            // }
        })
        
        setName('');
        setSurname('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }

    return (
    <form onSubmit={(e) => { handleSubmit(e) }} action="/users" method='POST' className='sign-up-form'>
        <label > Name: </label> <br />
        <input type="text" placeholder='Bruno' value={name} required onChange={(e)=> { handleChange(e) }}/> <br />
        <label> Surname: </label><br />
        <input type="text" placeholder='Madrigal' value={surname} required onChange={(e) => { handleSurnameChange(e) }} /><br />
        <label> Email: </label> <br />
        <input type="text" placeholder='bruno@mail.com' value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
        <label> Password: </label><br />
        <input type="password" placeholder='Password' value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
        <label> Confirm Password: </label><br />
        <input type="password" placeholder='Confirm Password' value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
        <button type="submit" id="submit-sign"> Submit </button>
    </form>
  );
}

export default SignUp;