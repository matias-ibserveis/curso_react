
// Ver código NODE en ejercicio5_3.js

import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0)
  const [cadena, setCadena] = useState(0)

  // currying: envia valor y texto, se devuelve una función aplicando esos valores
  const sumar_varios = (valor, texto) => () => {
    setCount(count + valor)
    setCadena(texto)
  }

  return (
    <div>
      <p>You clicked {count} times and now do {cadena}</p>
      <button onClick={sumar_varios(2,"sumando dos")}>
        Suma dos
      </button>

      <p></p>
      <button onClick={sumar_varios(3,"suma 3")}>
        Suma tres
      </button>

    </div>
  );
}

export default Contador;