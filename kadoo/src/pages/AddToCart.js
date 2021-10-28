import Header from './components/Header'
import Main from './components/Main'
import Basket from './components/Basket'
//import data from './data';
import React, { useEffect, useState } from 'react'
import axiosInstance from './axios'
import 'react-router-dom'
import './AddToCart.css'

function AddtoCart() {
  const [data, setData] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [unapproved, setUnapproved] = useState([])

  const [toolData, setToolData] = useState([])
  const [toolCartItems, setToolCartItems] = useState([])
  const [toolUnapproved, setToolUnapproved] = useState([])

  useEffect(() => {
    async function fetchProductData() {
      await fetch('http://127.0.0.1:8000/api/plantList/')
        .then((response) => response.json())
        .then((data) => {
          setData(data)
          console.log(data)
        })
    }

    async function fetchtoolsData() {
      await fetch('http://127.0.0.1:8000/api/toolList/')
        .then((response) => response.json())
        .then((data) => {
          setToolData(data)
          console.log(data)
        })
    }
    // GET request using fetch inside useEffect React hook

    async function fetchUserData() {
      await axiosInstance
        .post(`user/token/`, {
          email: '1@1.com',
          password: 'Tahlil1400',
        })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access)
          localStorage.setItem('refresh_token', res.data.refresh)
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    }

    fetchProductData()
    fetchUserData()
    fetchtoolsData()
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  const fetchCartData = () => {
    console.log('fsdfsdf')
    axiosInstance.get(`cart/user-unapproved-plants-cart/`).then((res) => {
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token')
      setUnapproved(res.data)
    })

    for (let i = 0; i < unapproved.length; i++) {
      console.log(data.findIndex((x) => x.id === unapproved[i].plant_item))
      let exist = cartItems.find((x) => x.id === unapproved[i].plant_item)
      if (!exist) {
        let productadd =
          data[data.findIndex((x) => x.id === unapproved[i].plant_item)]
        console.log(productadd)
        setCartItems([
          ...cartItems,
          { ...productadd, qty: unapproved[i].plant_count },
        ])
      }
    }

    //Tool Update

    axiosInstance.get(`cart/user-unapproved-tools-cart/`).then((res) => {
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token')
      setToolUnapproved(res.data)
    })

    for (let i = 0; i < toolUnapproved.length; i++) {
      console.log(data.findIndex((x) => x.id === toolUnapproved[i].tool_item))
      let exist = toolCartItems.find(
        (x) => x.id === toolUnapproved[i].tool_item
      )
      if (!exist) {
        let productadd =
          toolData[
            toolData.findIndex((x) => x.id === toolUnapproved[i].tool_item)
          ]
        console.log(productadd)
        setToolCartItems([
          ...toolCartItems,
          { ...productadd, qty: toolUnapproved[i].tool_count },
        ])
      }
    }
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
      axiosInstance
        .post(`cart/update-plant-cart/`, {
          id: product.id,
          count: exist.qty + 1,
        })
        .then((res) => {
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
      axiosInstance
        .post(`cart/add-plant-to-cart/`, {
          id: product.id,
        })
        .then((res) => {
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    }
  }

  const onAddTool = (product) => {
    const exist = toolCartItems.find((x) => x.id === product.id)
    if (exist) {
      setToolCartItems(
        toolCartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
      axiosInstance
        .post(`cart/update-tool-cart/`, {
          id: product.id,
          count: exist.qty + 1,
        })
        .then((res) => {
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    } else {
      setToolCartItems([...toolCartItems, { ...product, qty: 1 }])
      axiosInstance
        .post(`cart/add-tool-to-cart/`, {
          id: product.id,
        })
        .then((res) => {
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
      let config = {
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('access_token'),
        },
        data: {
          //! Take note of the `data` keyword. This is the request body.
          id: product.id,
        },
      }
      axiosInstance.delete(`cart/delete-plant-cart/`, config)
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
      axiosInstance
        .post(`cart/update-plant-cart/`, {
          id: product.id,
          count: exist.qty - 1,
        })
        .then((res) => {
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    }
  }

  const onRemoveTool = (product) => {
    const exist = toolCartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setToolCartItems(toolCartItems.filter((x) => x.id !== product.id))
      let config = {
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('access_token'),
        },
        data: {
          //! Take note of the `data` keyword. This is the request body.
          id: product.id,
        },
      }
      axiosInstance.delete(`cart/delete-tool-cart/`, config)
    } else {
      setCartItems(
        toolCartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
      axiosInstance
        .post(`cart/update-tool-cart/`, {
          id: product.id,
          count: exist.qty - 1,
        })
        .then((res) => {
          axiosInstance.defaults.headers['Authorization'] =
            'JWT ' + localStorage.getItem('access_token')
          //history.push('/')
          console.log(res)
          console.log(res.data)
        })
    }
  }

  const Checkout = () => {
    axiosInstance.post(`cart/approve-all-cart/`, {}).then((res) => {
      axiosInstance.defaults.headers['Authorization'] =
        'JWT ' + localStorage.getItem('access_token')
      //history.push('/')
      console.log(res)
      console.log(res.data)
      alert('Implement Checkout!')
    })
  }

  return (
    <div className='App'>
      <Header
        countCartItems={cartItems.length}
        upDateCartFunc={fetchCartData}
      ></Header>
      <div className='row'>
        <Main
          plants={data}
          tools={toolData}
          onAdd={onAdd}
          onAddTool={onAddTool}
        ></Main>
        <Basket
          cartItems={cartItems}
          toolCartItems={toolCartItems}
          onRemove={onRemove}
          onRemoveTool={onRemoveTool}
          onAddPlant={onAdd}
          onAddTool={onAddTool}
          CheckoutCart={Checkout}
        ></Basket>
      </div>
    </div>
  )
}

export default AddtoCart
