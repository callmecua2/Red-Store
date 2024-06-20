import { useContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './pages/Categories'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import All from './components/pages-components/All'
import Furniturespages from './components/pages-components/Furniturespages'
import Electronicspages from './components/pages-components/Electronicspages'
import Chairspages from './components/pages-components/Chairspages'
import Lampspages from './components/pages-components/Lampspages'
import Kitchenpages from './components/pages-components/Kitchenpages'
import Skincarepages from './components/pages-components/Skincarepages'
import Productpage, { CartContext } from './pages/ProductPage'
import ShoppingCart from './pages/ShoppingCart'



function App() {

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (items) => { 
    setCartItem((cartItem) => [...cartItem, items])
    console.log(cartItem)
  }
  

  
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    if(cartItem.length >= 1) {
      localStorage.setItem("cartItem", json);
    }
  }, [cartItem]);


  return (
    <CartContext.Provider value={{cartItem, addToCart, setCartItem}}>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />} >
              <Route path='all' element={<All />} />
              <Route path='furnitures' element={<Furniturespages />} />
              <Route path='electronics' element={<Electronicspages />} />
              <Route path='chairs' element={<Chairspages />} />
              <Route path='lamps' element={<Lampspages />} />
              <Route path='kitchen' element={<Kitchenpages />} />
              <Route path='skincare' element={<Skincarepages />}/>
            </Route>
            <Route path='/categories/product/:id' element={<Productpage />} />
            {/* <Route path='/contact' element={<Contact />}/> */}
            <Route path='/mycart' element={<ShoppingCart />} />
          </Routes>
        </Router>
      <Footer />
    </CartContext.Provider>
  )
}

export default App
