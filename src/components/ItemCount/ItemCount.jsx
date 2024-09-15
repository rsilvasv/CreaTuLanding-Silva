import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ productId }) => {
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${count} units of product ${productId} to the cart.`);
    // Aquí agregarías la lógica para manejar el carrito de compras
  };

  return (
    <div className="item-count">
      <button onClick={() => setCount(prevCount => Math.max(prevCount - 1, 1))}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ItemCount;
