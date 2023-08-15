import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import "./App.css"
import Productlist from './pages/Productlist'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
const App = () => {
    return (
        <React.Fragment>
            <Home />
            {/* <Productlist /> */}
            {/* <Product /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <Cart /> */}
        </React.Fragment>
    )
}

export default App