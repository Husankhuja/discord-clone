import React from 'react';
import RegisterModal from './RegisterModal.js';

//styles
import '../styles/RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className="register__page">
            <RegisterModal />
        </div>
    );
}

export default RegisterPage;