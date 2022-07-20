import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/' element={<Home />} />
                <Route path="/:id" element={<BiciDetalle />} />
            </Routes>
        </BrowserRouter>

    </>

  )
}

export default Router