import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductSearch from './ProductSearch'
// import Navbar from "./components/nav-bar.component"

function App() {


  return (

    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/search' element={<ProductSearch />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
