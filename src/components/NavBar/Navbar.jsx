import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Navbar.css';
import Swal from 'sweetalert2';
import logo from '../assets/Alimentos-logo.png';
import instagramIcon from '../assets/instagram-icon.svg'; // Asegúrate de tener esta imagen en tu proyecto
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleClearCart = () => {
    clearCart();
    Swal.fire({
      title: 'Carrito vaciado',
      icon: 'info',
      timer: 2000,
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
    });
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Sección de publicidad */}
      <div className="navbar-ad">
        <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
        <p className="ad-text">
        Explora nuestra linea</p>
      </div>
      
      {/* Navbar principal */}
      <nav className="navbar">
        <div className="nav-center">
          <Link style={{margin:"2rem"}} to="/marca/Cormillot">Cormillot</Link>
          <Link style={{margin:"2rem"}} to="/marca/Bon Wert">Bon Wert</Link>
          <Link style={{margin:"2rem"}} to="/marca/Croppers">Croppers</Link>
          <Link style={{margin:"2rem"}} to="/marca/Aglu">Aglu</Link>
          <Link style={{margin:"2rem"}} to="/">Inicio</Link>
        </div>
        <div className="img-container">
          <img src={logo} alt="Alimentos Naturales" className="logo" />
        </div>

        <div className="cart-container">
          <button onClick={handleCartClick} className="cart-icon">
          🛒
          <span className="cart-counter">{totalItemsInCart}</span> {/* Contador del carrito */}
        </button>
          {isCartOpen && (
            <div className="cart-details">
              {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.unit_price} x {item.quantity} 
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={handleClearCart}>Vaciar Carrito</button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

