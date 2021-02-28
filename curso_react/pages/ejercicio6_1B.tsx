//  Functional Components: https://fettblog.eu/typescript-react/components/
//  Functional explanation: Why does React seem so hard?
//  https://www.framer.com/books/framer-guide-to-react/

import { useEffect, useState } from 'react';

interface CounterProps {
  description: string
}

const Contador = ({description }: CounterProps) => {
  const [count, setCount] = useState(0)
  

  useEffect(() => {
    const id = setTimeout(() => {
      console.log('from cancel timeout', description);
      
    }, 2000);

    setCount(count+1)
    return () => {
      //clearTimeout(id);
    };
  }, [description]);

 /* useEffect(() => {
    let currentRender = true;

    setTimeout(() => {
      if (currentRender) {
        console.log('from variable', description);
      } else {
        console.log('UPS I am done');
      }
    }, 3000);

    return () => {
      currentRender = false;
    };
  }, [description]);

 */

  function sumar_uno() {
    setCount(count + 1);
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
            //onChange = {cambioEstado}
          />
          <Contador description = {nombre} ></Contador>

    </div>
  )

}


export default Programa