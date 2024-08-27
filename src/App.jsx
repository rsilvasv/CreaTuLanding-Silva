import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React from 'react'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'¡Bienvenidos!'}/>
    </div>

  )
}

export default App
