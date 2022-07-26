import React from 'react'
import logo from '../../assets/img/logo_def.png'

import { Link } from 'react-router-dom'
import { 
    CtContainer,
    BtBici,
    BtEquipamiento,
    CtInfo, 
    CtNavbar, 
    TxtLogo,  } from './Navbar.styled'


function Navbar() {

  return (

    <>

    <CtContainer>
    <CtNavbar> 

      <Link to="/">
        <TxtLogo src={logo} alt='logo'></TxtLogo>
       </Link>

      <CtInfo>
          <BtBici>SUBIR PRODUCTO</BtBici>
          <BtEquipamiento>EQUIPAMIENTO</BtEquipamiento>
      <Link to="/form">
      <BtEquipamiento>CONTACTO</BtEquipamiento>
       </Link>

      </CtInfo>
      </CtNavbar>
      </CtContainer>
</>
  )
}

export default Navbar