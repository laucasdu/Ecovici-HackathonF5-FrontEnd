import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { Home } from "../pages/Home";



function Router() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/' element={<Home />} />
                <Route path='/products/:id' element={<ProductDetailPage />} />
            </Routes>
        </BrowserRouter>

    </>

  )
}

export default Router