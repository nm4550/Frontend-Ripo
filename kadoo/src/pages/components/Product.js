import React from 'react'

export default function Product(props) {
  const { product, onAdd } = props
  return (
    <div className='row.center'>
      <img
        className='center-image small'
        src={product.image}
        alt={product.name}
      />
      <h3 className='center-text'>{product.name}</h3>
      <div className='center-text'>${product.price}</div>
      <div>
        <button className='center-Button' onClick={() => onAdd(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  )
}
