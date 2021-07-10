import React from 'react';
import '../styles/LoginModal.css';

const LoginModal = () => {
    return (
        <div className="login__modal">
            <form className="login__form">
                <h2>Welcome back!</h2>
                <p>We're so excited to see you again!</p>
                <div className="input__field">
                    <label for="username">Email</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="input__field">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                    <a>Forgot your password?</a>
                </div>
                <button className="login__button" type="submit">Login</button>
                <p>Need an account? <a>Register</a></p>
            </form>
        </div>
    );
}

export default LoginModal;