import React from 'react'    //no es necesario en Nextjs
//import './styles.css'

function Ficha(props){

  const {personName, timeAgo} = props  //destructuring
  return (
    <div>
        <h1>El nombre es: {personName}</h1>
        <h2>EL tiempo es: {timeAgo}</h2>
    </div>
  )
}

export default function ejercicio1() {
  return (
    <div>
      <input value="5"/>
      <Ficha personName="Bruno" timeAgo="5 minutes ago" />
      <Ficha personName="Joao" timeAgo="15 minutes ago" />
      <Ficha personName="Carlos" timeAgo="115 minutes ago" />
    </div>

  )


}