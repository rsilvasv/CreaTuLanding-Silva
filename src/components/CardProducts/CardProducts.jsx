import React from 'react'
import './CardProducts.css'

const CardProducts = ({producto}) => {
    return (
      
        <div className="producto-card">
          <img src={producto.img} alt={producto.name} className="producto-image" />
          <div className="producto-info">
            <h2>{producto.name}</h2>
            <p className="producto-description">{producto.description}</p>
            <p className="producto-price">Precio: ${producto.unit_price}</p>
          </div>
        </div>
    );
  }
  
  export default CardProducts;
