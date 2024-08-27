import React from "react";
import CartWidget from "../CartWidget/Cartwidget";
import "./Navbar.css"; // Importar el CSS
import logo from '../assets/Logo.png'
import logoText from '../assets/Logo-text.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="Alimentos Naturales" className="logo" />
                <h3 className="logo-text">Almacen Vital</h3>
            </div>

            {/* Enlaces de navegación */}
            <div className="nav-links">
                <a href="#almendras" className="nav-link">Almendras</a>
                <a href="#nueces" className="nav-link">Nueces</a>
                <a href="#avellanas" className="nav-link">Avellanas</a>
            </div>

            {/* Carrito de compras */}
            <CartWidget />
        </nav>
    );
};

export default Navbar;