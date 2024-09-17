import React, { useEffect, useState, useContext } from 'react';
import './ItemListContainer.css';
import CardProducts from '../CardProducts/CardProducts';
import Filter from '../CategoryFilter/CategoryFilter'; // Este componente puede ser adaptado si usas filtros basados en otras propiedades
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import WelcomeAnimation from '../Animation/WelcomeAnimation';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Obtener la categoría desde la URL
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('../../../products.json');
        const data = await response.json();
        if (data){
          setProductos(data);
        }
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const handleAddToCart = (producto) => {
    addToCart(producto);
    Swal.fire({
      title: 'Producto agregado',
      text: `${producto.name} se ha añadido al carrito`,  // Aquí usas backticks
      icon: 'success',
      toast: true,
      position: 'bottom-right',
      timer: 3000,
      showConfirmButton: false
    });
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <div className="contenedorProducts">
        {productos.map((producto) => (
          <CardProducts
            key={producto.id}
            producto={producto}
            onAddToCart={() => addToCart(producto)} // Pasar la función de añadir al carrito
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
