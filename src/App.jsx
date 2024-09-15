import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetails from './components/ItemDetails/ItemDetails'
import NotFound from './components/NotFound/NotFound'
import './App.css'
import BrandFilter from './components/CategoryFilter/CategoryFilter'


function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<BrandFilter />} />
          <Route path="/product/:productId" element={<ItemDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App