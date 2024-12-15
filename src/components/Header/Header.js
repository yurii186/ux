import React from "react";
import "./Header.css";
import logo from '../../assets/image/logo(1).png';
const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <img
                    src={logo}
                     alt="Logo"
                    className="logo"
                />
            </div>
            <div className="header-center">
                <nav className="nav">
                    <a href="#info">Informácie o jaskyni</a>
                    <a href="#virtual">Virtuálna prehliadka</a>
                    <a href="#reservation">Rezervácia exkurzie</a>
                    <a href="#about">O nás</a>
                </nav>
            </div>
            <div className="header-right">
                <span>jaskyna@zladiera.sk</span>
                <span>+4210123456789</span>
            </div>
        </header>
    );
};

export default Header;
