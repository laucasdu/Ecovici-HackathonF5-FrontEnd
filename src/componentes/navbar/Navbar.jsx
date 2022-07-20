import React from 'react'
import { 
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

      <CtLogoCentral>

      </CtLogoCentral>

    <CtInfo>

          <TxtNew>BICIS</TxtNew>
          <TxtNew>EQUIPAMIENTO</TxtNew>
          <TxtRegistrate>REGISTRATE</TxtRegistrate>
      </CtInfo>
      </CtNavbar>
</>
  )
}

export default Navbar