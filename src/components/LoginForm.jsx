import React, { useState } from 'react'

const LoginForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");
    
    const [firstNameError, setFirstNameError] = useState(true);
    const [lastNameError, setLastNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [passwordError, setPasswordError] = useState(true);
    const [confirmPWError, setConfirmPWError] = useState(true);
    
    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 3){
            setFirstNameError("First Name must be at least 3 characters ")
        } else {
            setFirstNameError("")
        }
    }
    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 3){
            setLastNameError("Last Name must be at least 3 characters")
        } else {
            setLastNameError("")
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 3){
            setEmailError("Email must be at least 3 characters")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }
    const confirmPWHandler = (e) => {
        setConfirmPW(e.target.value);
        if (confirmPW !== password){
            setConfirmPWError("Passwords must match")
        } else {
            setConfirmPWError("")
        }
    }

    return (
        <div>
            <form>
                <div className='form'>
                    <label for="firstname">First Name: </label>
                    <input id="firstname" type="text" name="firstName" onChange={ firstNameHandler }/>
                    {
                        firstNameError &&
                        <p style={{ color: 'red'}}>{ firstNameError }</p>
                    }
                </div>
                <div className='form'>
                    <label for="lastname">Last Name: </label>
                    <input id="lastname" type="text" name="lastName" onChange={ lastNameHandler }/>
                    {
                        lastNameError &&
                        <p style={{ color: 'red'}}>{ lastNameError }</p>
                    }
                </div>
                <div className='form'>
                    <label for="email"> Email: </label>
                    <input id="email" type="text" name="email" onChange={ emailHandler }/>
                    {
                        emailError &&
                        <p style={{ color: 'red'}}>{ emailError }</p>
                    }
                </div>
                <div className='form'>
                    <label for="password">Password: </label>
                    <input id="password" type="text" name="password" onChange={ passwordHandler }/>
                    {
                        passwordError &&
                        <p style={{ color: 'red'}}>{ passwordError }</p>
                    }
                </div>
                <div className='form'>
                    <label for="confirmPW">Confirm Password: </label>
                    <input id="confirmPW" type="text" name="confirmPW" onChange={ confirmPWHandler }/>
                    {
                        confirmPWError &&
                        <p style={{ color: 'red'}}>{ confirmPWError }</p>
                    }
                </div>
                
            </form>
            
        </div>
    )
}

export default LoginForm