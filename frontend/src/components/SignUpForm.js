// https://codezup.com/forms-in-react-js-example-login-signup-form/#:~:text=When%20we%20talk%20about%20forms%20in%20React%20JS,handlers%20in%20the%20onChange%20attribute%20of%20the%20element.
import React, { useState } from 'react';

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
        if (password != confPassword) {
            alert("password Not Match");
        } else {
            alert('A form was submitted with Name :"' + name + '" ,Surname :"' + surname + '" and Email :"' + email + '"');
        } e.preventDefault();

        const signUpInfo = {
            name: name,
            surname: surname,
            email: email,
            password: password,
            user: 'user'
        }
        console.log(signUpInfo);

        fetch('http://localhost:4000/users', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            // body: JSON.stringify({name:name, surname:surname, email:email, password:password})
            body: JSON.stringify({signUpInfo})
        })
    }

    return (
    <form onSubmit={(e) => { handleSubmit(e) }} action="/users" method='POST' className='sign-up-form'>
        <label > Name: </label> <br />
        <input type="text" value={name} required onChange={(e)=> { handleChange(e) }}/> <br />
        <label> Surname: </label><br />
        <input type="text" value={surname} required onChange={(e) => { handleSurnameChange(e) }} /><br />
        <label> Email: </label> <br />
        <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
        <label> Password: </label><br />
        <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
        <label> Confirm Password: </label><br />
        <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
        <input type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;