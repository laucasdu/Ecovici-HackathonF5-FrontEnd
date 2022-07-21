import React from 'react'
import Carrousel from '../componentes/carrousel/Carrousel'
import Navbar from '../componentes/navbar/Navbar'
import NavbarMobil from '../componentes/navbarmobil/NavbarMovbil'
import ProductList from '../componentes/productList/ProductList'

function Home() {
  return (

    <>

    <Navbar/>
    <Carrousel/> 
    <ProductList/>
    <NavbarMobil/>


    </>

    )
}

export default Home