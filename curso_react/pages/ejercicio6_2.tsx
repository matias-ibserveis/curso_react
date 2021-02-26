//  Functional Components: https://fettblog.eu/typescript-react/components/
//  Functional explanation: Why does React seem so hard?
//  https://www.framer.com/books/framer-guide-to-react/

import { useEffect, useState } from 'react';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface CounterProps {
  numeroUsuario: string
}

const Contador = ({numeroUsuario }: CounterProps) => {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState<Todo>();

  useEffect(() => {
    async function loadData() {
      const resp = await fetch(
        'https://jsonplaceholder.typicode.com/todos/' + numeroUsuario
      );
      const json = await resp.json();
      setTodo(json);
    }

    // cada vez cambia 'numeroUsuario' se dispara 'loadData'
    loadData()

  }, [numeroUsuario]);
  

  const sumar_uno = () => {
    setCount(count + 1)
  }

  const restar_uno = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h5>
        DESC : {numeroUsuario} 
      </h5>
      <br></br>
      <p>{todo?.userId}</p>
      <h6>{todo?.title}</h6>

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
          <Contador numeroUsuario = {nombre} ></Contador>

    </div>
  )

}


export default Programa