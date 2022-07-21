import React from 'react'
import { 
  BtBici,
    BtEquipamiento,
    CtInfo, 
    CtLogo, 
    CtLogoCentral, 
    CtNavbar, 
    TxtLogo, 
    TxtNew, 
    TxtRegistrate } from './Navbar.styled'


function Navbar() {

  return (

    <>

    <CtNavbar> 

      <CtLogo>
        <TxtLogo>HOME</TxtLogo>
      </CtLogo>

    <CtInfo>

          <BtBici>BICIS</BtBici>
          <BtEquipamiento>EQUIPAMIENTO</BtEquipamiento>
          <BtEquipamiento>CONTACTO</BtEquipamiento>


      </CtInfo>
      </CtNavbar>
</>
  )
}

export default Navbar