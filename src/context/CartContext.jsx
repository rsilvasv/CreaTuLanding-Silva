import { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Creamos una copia del carrito para evitar modificar el estado directamente
      const updatedCart = [...prevCart];
      const existingProductIndex = updatedCart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        // Producto ya existe, actualizamos la cantidad correctamente
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1,
        };
      } else {
        // Producto no existe, lo agregamos con cantidad inicial de 1
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });

    // SweetAlert para indicar que el producto fue agregado al carrito
    Swal.fire({
      title: 'Producto agregado',
      text: `${product.name} se agregó al carrito`,
      icon: 'success',
      timer: 2000,
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};



