import React from 'react'
import logo from '../../assets/img/logo.png'

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

          <BtBici>BICIS</BtBici>
          <BtEquipamiento>EQUIPAMIENTO</BtEquipamiento>
          <BtEquipamiento>CONTACTO</BtEquipamiento>

      </CtInfo>
      </CtNavbar>
      </CtContainer>
</>
  )
}

export default Navbar