import React from 'react';

const Filter = ({ selectedBrand, onFilterChange, brands }) => {
  return (
    <div className="filter-section">
      <label htmlFor="brand-filter">Filtrar por marca: </label>
      <select id="brand-filter" value={selectedBrand} onChange={onFilterChange}>
        <option value="">Todas las marcas</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;



