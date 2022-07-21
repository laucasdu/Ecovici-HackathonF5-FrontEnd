import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Form from '../pages/Form'

function Router() {


  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/products' element={<Home />} />
            <Route path='/products/:id' element={<Detail/>}/>
            <Route path="/form" element={<Form />} />


        </Routes>
    
    
    </BrowserRouter>



  )
}

export default Router