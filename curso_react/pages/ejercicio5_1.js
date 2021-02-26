
// envío de datos en botón = currying
// explicación: https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript 
// /https://www.carlrippon.com/using-currying-to-pass-additional-data-to-react-event-handlers/
// https://medium.com/front-end-weekly/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1
/* 

// Ver código NODE en ejercicio5_3.js

const sum = x => y => x + y;

sum (5, 7)     // returns the number 12
sum (5)        // returns a function y => 5 + y

*/

import { useState } from 'react';

const Contador = () => {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0)

  const sumar_uno = () => {
    setCount(count + 1)
  }

  // primero recibe 'valor' y después lo aplica a una función
  const sumar_varios = valor => () => {
    setCount(count + valor)
  }

  return (
    <div>
        <p>You clicked {count} times</p>
      <button onClick={sumar_uno}>
        Suma 1
      </button>

      <button onClick={sumar_varios(3)}>
        Suma varios
      </button>
    </div>
  );
}

export default Contador;