
import { useState } from 'react';

const Contador = () => {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0)

  const sumar_uno = () => {
    setCount(count + 1)
  }

  const sumar_varios = () => {
    const valor = 3
    setCount(count + valor)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={sumar_uno}>
        Suma 1
      </button>

      <button onClick={sumar_varios}>
        Suma varios
      </button>
    </div>
  );
}

export default Contador;