import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context/context'

import GrandChildOne from './GrandChildOne'

export default function ChildOne() {
  const data = useContext(MyContext)

  return (
    <div><h1>Child One in App : Counter Value = {data.counter}</h1>
    <GrandChildOne />
    </div>
  )
}


/* export default function ChildOne({counter,setCounter}) {
   
    return (
      <div><h1>Child One in App : Counter Value = {counter}</h1>
      <GrandChildOne setCounter = {setCounter}/>
      </div>
    )
  }
   */