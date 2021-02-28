// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Fragment, useEffect, useState } from 'react';

export default function List({usuariosList}) {

  const [numUsuario, setNumero] = useState(0)

  const crearLista = (lista) => {
    const lista_formato = lista.map((element, index) => 
        <div key={index}>
            <button onClick={seleccionUsuario(element.id)}>
              Ver la ficha de {element.id} - {element.name}
            </button>
        </div>
    )
    return lista_formato
  }

  // currying : ver ejercicio 5_1. 5_2 , 5_3   https://github.com/matias-ibserveis/curso_react
  
  const seleccionUsuario = id_buscado => evento => {
    setNumero(id_buscado)
    console.log("numUsuario en seleccion",numUsuario)
    // podríamos ahorrarnos esta función,  onClick={setNumero = element.id} 
  }

  const Ver = () => {
    const usuario = usuariosList.filter(element => element.id === numUsuario)
    //también existe .findIndex
    console.log("en Ver",usuario[0].name)
    const resultado =   <div>
                          <h3>Nombre: {usuario[0].name}</h3>
                          <p>email: {usuario[0].email}</p>
                        </div>
    return resultado           
  }

  
return (
  <div>
    { crearLista(usuariosList) }
    { numUsuario ? Ver() : false}
  </div>
)
}

List.getInitialProps = async () => {
  //const response = await fetch
  ('https://jsonplaceholder.typicode.com/users');
  const response = await fetch('http://localhost:4001/usuarios')
  const listadoDatos = await response.json();
  return {usuariosList: listadoDatos}
}