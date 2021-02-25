import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

export default function Usuario({ fichaUsuario }) {
 const router = useRouter();
 const [usuario, setusuario] = useState(fichaUsuario)
 
  useEffect(() => {    //cada vez que cambien los datos de usuario, se actualiza la ficha

    async function loadData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/' + router.query.id)
    
      const fichaUsuario = await response.json()
      setusuario(fichaUsuario)
      console.log("ficha",fichaUsuario)
    }

    if(fichaUsuario.length == 0) {
        loadData();
      }

    }, []);


  if(!usuario) { 
    return <div>loading...</div>
  }

  return (
    <Fragment>
      <h3>{usuario.name}</h3>
      <p> {usuario.username}</p>
      <p> {usuario.email}</p>
     </Fragment>
  )
}


Usuario.getInitialProps = async ctx => {
  if(!ctx.req) {     // ctx = context, query actual en el navegador
      return { fichaUsuario: [] };
  }
  const { query } = ctx
  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + query.id)
   
  const fichaUsuario = await response.json();
  return { fichaUsuario: fichaUsuario };
};
