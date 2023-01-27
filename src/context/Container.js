import React from 'react'
import { useState } from 'react'
import { MyContext } from './context'

export default function Container({children}) {
    const [counter,setCounter] = useState(0)
  return (
    <MyContext.Provider value={{counter,setCounter}}>
        {children}
    </MyContext.Provider>
  )
}



{/* <Container> <App/>  </Container> */}