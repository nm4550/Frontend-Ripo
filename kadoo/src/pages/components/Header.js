import React from 'react'

export default function Header(props) {
  const { upDateCartFunc } = props
  return (
    <header className='block row center'>
      <div>
        <a href='#/'>
          <h1>Small Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>
          Cart{' '}
          {props.countCartItems ? (
            <button className='badge'>{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href='#/signin'> SignIn</a>
        <button onClick={() => upDateCartFunc()} className='bupdate-button'>
          Update Cart
        </button>
      </div>
    </header>
  )
}
