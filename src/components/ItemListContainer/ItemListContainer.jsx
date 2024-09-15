import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import CardProducts from '../CardProducts/CardProducts';

const ItemListContainer = ({ selectedBrand }) => {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  
  // Estado para manejar si los datos están cargando
  const [loading, setLoading] = useState(true);

  // useEffect para cargar los productos cuando el componente se monte
  useEffect(() => {
    // Función asincrónica para obtener los datos del archivo productos.json
    const fetchProductos = async () => {
      try {
        // Hacemos la petición a productos.json
        const response = await fetch('../../../products.json');
        const data = await response.json();
        console.log(data);
        // Guardamos los productos en el estado
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        // Cambiamos el estado de "loading" a false cuando los datos se cargan
        setLoading(false);
      }
    };

    fetchProductos();
  }, []); // El array vacío asegura que el fetch se ejecute solo una vez, al montar el componente

  // Filtrar los productos por marca seleccionada
  const filteredProducts = selectedBrand
    ? productos.filter(producto => producto.brand === selectedBrand)
    : productos;

  // Si los productos están cargando, mostramos un mensaje
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <div className="contenedorProducts">
        {filteredProducts.map((producto) => (
          <CardProducts key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
