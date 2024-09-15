import React from 'react';
import './CategoryFilter.css'; // Renombra el archivo CSS a algo más adecuado como `BrandFilter.css`

const BrandFilter = ({ brands, onBrandSelect, selectedBrand }) => {
  return (
    <div className="brand-filter">
      <h1>Filtrar por Marca</h1>
      <div className="filter-buttons">
        {brands.map((marca) => (
          <button
            key={marca}
            className={selectedBrand === marca ? 'active' : ''}
            onClick={() => onBrandSelect(marca)}
          >
            {marca}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;


