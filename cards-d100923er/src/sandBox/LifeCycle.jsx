import React, { useEffect } from 'react'

export default function LifeCycle() {
  useEffect(() => {
    console.log("the component has mount"); 
  return () => {
    console.log("the component ha UNmount");};

}, [])


  return (
    <div>LifeCycle!</div>
  )
}
