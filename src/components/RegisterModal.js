import React from 'react';


//styles
import '../styles/RegisterModal.css';

const RegisterModal = () => {
    return (
        <div className="register__modal">
            <div className="modal__top">
                <h2>Create an account</h2>
            </div>
            <form className="register__form">
                <div className="input__field">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div >
                <div className="input__field">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="input__field">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="input__field">
                    <label for="birthdate">Date Of Birth</label>
                    <input type="date" id="birthdate" name="birthdate" />
                </div>
                <button className="register__button" type="submit">Continue</button>
            </form>
        </div>
    );
}

export default RegisterModal;