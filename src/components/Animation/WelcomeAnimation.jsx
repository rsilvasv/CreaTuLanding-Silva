import React from 'react';
import './WelcomeAnimation.css'; 
import animation from '../assets/gif-alimentos.gif';
import fontStyles from '../../styles/styles';

const WelcomeAnimation = () => {
  return (
    <div className="welcome-animation">
      <img src={animation} alt="Bienvenida" className="animation-gif" />
    </div>
  );
};

export default WelcomeAnimation;

