import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function List({usuariosList}) {

  const crearLista = (lista) => {

    const lista_formato = lista.map((element, index) => 
        <div key={index}>
          <Link as={`${element.name}`} href={`/usuario?id=${element.id}`}>
            <a>
              Ver la ficha de {element.id} - {element.name}
            </a>
          </Link>
        </div>
    )
    return lista_formato
  }
  
  return (
    <div>
      { crearLista(usuariosList) }
    </div>
  );
}

List.getInitialProps = async () => {
  //const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const response = await fetch('http://localhost:4001/usuarios')
  const listadoDatos = await response.json();
  return {usuariosList: listadoDatos}
}