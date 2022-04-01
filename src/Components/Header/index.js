import React from 'react';
import './header.css';

function Header () {
    return (
        <React.Fragment>
            <header className="header">
                <img className="header__img" src="https://img.icons8.com/ios-filled/30/000000/logo.png" alt="logo" />
                <div className= "header__menu">
                    <div className="header__menu--profile">
                        <img src="https://img.icons8.com/ios-glyphs/50/000000/user.png" alt="user" />
                        <p>Perfil</p>
                        
                    </div>
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/">Cerrar sesi&oacute;n</a></li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    )
}

export {Header}