import React, { useState } from 'react'
import { BtSearch, CtSearch, Input } from './Search.styled';



function Search({getSearchProduct, search, setSearch}) {

    

  

    return (

        <CtSearch>
          
                <Input/>
                <BtSearch type="submit"><i className="fa-solid fa-magnifying-glass"></i></BtSearch>          
              </CtSearch>
        
        )
    }
    
        
        
        export default Search