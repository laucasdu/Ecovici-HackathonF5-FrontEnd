import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "../pages/Home";
import ProductDetailPage from '../pages/ProductDetailPage';



function Router() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/' element={<Home />} />
                {/* <Route path="/products/:id" element={<ProductDetailPage />} /> */}
            </Routes>
        </BrowserRouter>

    </>

  )
}

export default Router