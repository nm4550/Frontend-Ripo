import React from 'react'
import Product from './Product'
import ToolProduct from './ToolProduct'

export default function Main(props) {
  const { plants, tools, onAddPlant, onAddTool } = props
  return (
    <main className='block col-2'>
      <h2>Plants</h2>
      <div>
        {plants.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAdd={onAddPlant}
          ></Product>
        ))}
      </div>
      <h2>Tools</h2>
      <div>
        {tools.map((product) => (
          <ToolProduct
            key={product.id}
            product={product}
            onAdd={onAddTool}
          ></ToolProduct>
        ))}
      </div>
    </main>
  )
}
