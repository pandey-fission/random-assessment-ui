import React from "react";
import Logo from '../../Assets/logo.png'
import './Header.css';

function Header() {
    return (
        <div className="bg-black header">
            <div className="d-flex flex-column logo-container" >
                <img src={Logo} alt="Logo" className="logo" width={60} onClick={() => window.location.reload()}/>
                <span className="logo-bottom-line">RANDOM ASSESSMENT</span>
            </div>
        </div>
    )
}

export default Header