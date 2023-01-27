import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context/context'
import GrandChildTwo from './GrandChildTwo'

export default function ChildTwo() {
  const { counter } = useContext(MyContext)
  return (
    <div><h1>Child two in App: Counter = {counter}</h1>
    <GrandChildTwo/>
    </div>
  )
}


/* export default function ChildTwo({counter,setCounter}) {
    return (
      <div><h1>Child two in App: Counter = {counter}</h1>
      <GrandChildTwo setCounter={setCounter}/>
      </div>
    )
  }
   */