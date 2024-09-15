import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import CardProducts from '../CardProducts/CardProducts';
import Filter from '../CategoryFilter/CategoryFilter'; // Importamos el componente de filtro

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);      // Todos los productos
  const [filteredProductos, setFilteredProductos] = useState([]); // Productos filtrados
  const [loading, setLoading] = useState(true);        // Estado de carga
  const [selectedBrand, setSelectedBrand] = useState(''); // Marca seleccionada

  // useEffect para cargar los productos al montar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('../../../products.json'); // Obtener productos del JSON
        const data = await response.json();
        setProductos(data);
        setFilteredProductos(data);  // Mostrar todos los productos al inicio
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);  // Detener el estado de carga
      }
    };
    fetchProductos();
  }, []);

  // Filtrado: Función para manejar el cambio de marca y filtrar productos
  const handleFilterChange = (event) => {
    const selected = event.target.value;
    setSelectedBrand(selected);

    if (selected === '') {
      setFilteredProductos(productos);  // Si no hay marca seleccionada, mostrar todos los productos
    } else {
      const filtered = productos.filter(producto => producto.marca === selected);
      setFilteredProductos(filtered);  // Filtrar productos por la marca seleccionada
    }
  };

  // Obtener marcas únicas para el filtro
  const uniqueBrands = Array.from(new Set(productos.map(producto => producto.marca)));

  // Si los productos están cargando, mostrar un mensaje
  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      {/* Integración del componente Filter */}
      <Filter
        selectedBrand={selectedBrand}
        onFilterChange={handleFilterChange}
        brands={uniqueBrands}
      />

      {/* Mostrar los productos filtrados */}
      <div className="contenedorProducts">
        {filteredProductos.map((producto) => (
          <CardProducts key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
