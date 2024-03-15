
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Singleprodct from './Singleprodct';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./fakeData.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  const handleCart = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    if(!isExist){
      setCart([...cart, p])
    }
    else{
      alert('Already in cart')
    }
  }
  console.log(cart)

  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {
            products.map(pd => <Singleprodct product={pd} handleCart={handleCart}></Singleprodct>)
          }

        </div>
        <div className="cart-container">
          <div className="cart-content">
            <h>Name</h>
            <h>Price</h>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
