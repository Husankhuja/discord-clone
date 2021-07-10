import React from 'react';
import LoginModal from './LoginModal';

// styling
import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login__page">
            <LoginModal />
        </div>
    );
}

export default LoginPage;