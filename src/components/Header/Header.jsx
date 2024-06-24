import React from "react";
import './Header.css';

import Logo from '../../Assets/logo.png';
import homeIcon from '../../Assets/home icon.png';
import userIcon from '../../Assets/user icon.png';

import studyImage from '../../Assets/temp_img.jpg';

function Header(props) {
    const { title, subtitle, setMcqs } = props
    return (
        <>
            <div className="header">
                <div className="d-flex logo-container" >
                    <img src={Logo} alt="Logo" className="logo" width={60} onClick={() => /*window.location.reload()*/ {}} />
                    <span className="logo-bottom-line">RANDOM ASSESSMENT</span>
                </div>
                <div>
                    <div className="header-action-icons">
                        <div>
                            <img className="home-icon" src={homeIcon} width={30} alt="home" onClick={() => { setMcqs([]) }} />
                        </div>
                        <div>
                            <img className="user-icon" src={userIcon} width={30} alt="user" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-header">
                <h1>{title || 'Upload and attach files'}</h1>
                <span>{subtitle || 'upload and attach files to this project'}</span>
            </div>
        </>
    )
}

export default Header