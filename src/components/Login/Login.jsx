import React, { useState } from 'react'
import "./Login.css"
import { assets } from '../../assets/assets'

const Login = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up")
    return (
        <div className="login">
            <form className="login-container">
                <div className="login-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-input">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='your name' required />}
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy Policy</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a New Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> :
                    <p>Already have an Account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>}
            </form>
        </div>
    )
}

export default Login;