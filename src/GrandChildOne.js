import React from 'react'
import { useContext } from 'react'
import { MyContext } from './context/context'

export default function GrandChildOne() {
  const { setCounter } = useContext(MyContext)
  return (
    <div><h3>GrandChildOne in Childone</h3> <button onClick={()=>setCounter(pre=>pre+1)} >increment</button></div>
  )
}



/* export default function GrandChildOne({setCounter}) {
  return (
    <div><h3>GrandChildOne in Childone</h3> <button onClick={()=>setCounter(pre=>pre+1)} >increment</button></div>
  )
}
 */