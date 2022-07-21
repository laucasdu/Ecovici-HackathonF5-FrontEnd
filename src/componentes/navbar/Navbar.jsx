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
          <BtEquipamiento>CONTACTO</BtEquipamiento>

      </CtInfo>
      </CtNavbar>
      </CtContainer>
</>
  )
}

export default Navbar