import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

function Router() {


  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/products' element={<Home />} />
            <Route path='/products/:id' element={<Detail/>}/>
        </Routes>
    
    
    </BrowserRouter>



  )
}

export default Router