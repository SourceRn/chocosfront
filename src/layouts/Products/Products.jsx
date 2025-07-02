import React from 'react'
import milk from '../../assets/milk.png'
import shake from '../../assets/protein-shake.png'
import smoothie from '../../assets/smoothie.png'

const Products = () => {
  return (
    <section className="products">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        <div className="product-item">
          <img src={milk} alt="Chocolate Milk" />
          <p>Choco de Leche</p>
        </div>
        <div className="product-item">
          <img src={shake} alt="Protein Chocolate Shake" />
          <p>Choco de Chocolate con Proteina</p>
        </div>
        <div className="product-item">
          <img src={smoothie} alt="Chocolate Smoothie"/>
          <p>Smoothie de Chocolate</p>
        </div>
      </div>
    </section>
  )
}

export default Products