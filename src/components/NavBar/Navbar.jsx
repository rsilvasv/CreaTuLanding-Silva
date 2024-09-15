import React from "react";
import CartWidget from "../ItemCount/ItemCount";
import "./Navbar.css"; // Importar el CSS
import logo from '../assets/Alimentos-logo.png'
import logoText from '../assets/Logo-text.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="Alimentos Naturales" className="logo" />
                
            </div>

            
            <CartWidget />
        </nav>
    );
};

export default Navbar;