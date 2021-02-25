import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function List({ownersList}) {
  
  return (
    <div>
      {ownersList.map((element, index) => (
        <div key={index}>
          <Link as={`/${element.namme}/${element.email}`} href="/[vehicle]/[person]">
            <a>
              Navigate to {element.name}'s {element.email}
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
  const ownersList = await response.json();
  return {ownersList: ownersList}
}