import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context/context'

export default function GrandChildTwo() {
  const {setCounter}= useContext(MyContext)
  return (
    <div><h3>GrandChildTwo in Child Two</h3>
    <button onClick={()=>setCounter(pre=>pre-1)} >decrement</button>
    </div>
  )
}


/* export default function GrandChildTwo({setCounter}) {
  return (
    <div><h3>GrandChildTwo in Child Two</h3>
    <button onClick={()=>setCounter(pre=>pre-1)}>decrement</button>
    </div>
  )
} */