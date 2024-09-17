import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetails from './components/ItemDetails/ItemDetails'
import NotFound from './components/NotFound/NotFound'
import './App.css'
import { CartProvider } from './context/CartContext'
import ItemFilterContainer from './components/ItemFilterContainer/ItemFilterContainer'


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/marca/:marcaId" element={<ItemFilterContainer />} />
          <Route path="/product/:productId" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App