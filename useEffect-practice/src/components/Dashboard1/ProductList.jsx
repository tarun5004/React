import React from 'react'

const ProductList = ({ product, deleteProduct }) => {
  return (
    <div>
        <h1>Product List</h1>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>

        <button onClick={() => deleteProduct(product.id)}>Delete</button>

    </div>
  )
}

export default ProductList