import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'

function Router() {


  return (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/moments' element={<Home />} />
            <Route path="/moments/:id" element={<Detail/>}/>
        </Routes>
    
    
    </BrowserRouter>



  )
}

export default Router