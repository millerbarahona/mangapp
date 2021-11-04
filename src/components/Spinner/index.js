import React from 'react'
import './styles.css'
import '../ListOfAnimes/estilos.css'
export default function Spinner () {
  return (
    <div className=' flex flex-wrap h-screen'>
      <div className="lds-ring mx-auto my-auto"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}