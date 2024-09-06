import React, { useEffect, useState } from 'react'

const NormalLocalStorage = () => {
    const [storedValue , setStoredValue] = useState('');

const handleAdd =()=>{
    localStorage.setItem('token','123456789')
    setStoredValue('123456789')
}
const updateItem= ()=>{
   localStorage.setItem('token','vimal')
    setStoredValue('vimal')
}
function removeItem(){
    localStorage.removeItem('token')
    setStoredValue('')

} 
function getItem(){

    const value = localStorage.getItem('token') 
    setStoredValue(value || "")
}
useEffect(()=>{
getItem();
},[])

  return (
    <div>
        <button onClick={handleAdd} >Add</button>
        <button onClick={updateItem} >Update</button>
        <button onClick={removeItem} >Remove</button>
        <p>Stored: {storedValue}</p>
       
      
    </div>
  )
}

export default NormalLocalStorage
