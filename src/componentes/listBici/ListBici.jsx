import React from 'react'

function ListBici() {

  const [bici, setBici] = useState([]);


  return (

    <>
    
    <CtCardBici>
    {bici.map((bici, key)=> (
              <MomentCard 
              key={key} 
              bici={bici}
  
            />
    
              ))}
              </CtCardBici>
            </>
        )
      }

export default ListBici