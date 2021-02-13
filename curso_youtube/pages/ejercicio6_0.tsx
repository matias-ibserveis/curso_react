
import { Fragment, useEffect, useState } from 'react';

interface CounterProps {
  description: string
}

const Contador = ({description }: CounterProps) => {
  const [count, setCount] = useState(0)

  const sumar_uno = () => {
    setCount(count + 1)
  }

  const restar_uno = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h5>
        DESC : {description} 
      </h5>

      <button onClick={restar_uno}> - </button>
      {count}
      <button onClick={sumar_uno}> + </button>
  
    </div>
  )
}

const Programa = () => {

  interface FichaDatos {
    nombre: string
  }

  const [nombre,setNombre] = useState("")

  const cambioEstado = event => {
    setNombre(event.target.value)
  }

  return (
    <div>
        <input  
            type='text'
            id='input_nombre'
            onChange = {cambioEstado}
          />
          <Contador description = {nombre} ></Contador>

    </div>

  )


}


export default Programa