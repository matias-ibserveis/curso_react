import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function List({usuariosList}) {
  
  return (
    <div>
      {usuariosList.map((element, index) => (
        <div key={index}>
          <Link as={`${element.name}`} href={`/usuario?id=${element.id}`}>
            <a>
              Ver la ficha de {element.id} - {element.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

List.getInitialProps = async () => {
  //const response = await fetch('http://localhost:3000/vehicles');
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const usuariosList = await response.json();
  return {usuariosList: usuariosList}
}