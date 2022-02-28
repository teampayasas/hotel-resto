import React, { useState } from 'react';

// Add default values to all input fields.
const initialValues = {
    email: "",
    password: "",
}

export default function Login() {
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
    
        setValues({
            ...values,
            [name]: value,
        })

        console.log(value)
    };

    return (
        <form className='login-form'>
            <label> Email: </label> <br/>
            <input type="text" value={values.email} onChange={handleInputChange} name="email"></input> <br/>
            <label> Password: </label> <br/>
            <input type="password" value={values.password} onChange={handleInputChange} name="password"></input> <br/>
            <button type="submit"> Login </button>
        </form>
    )
}