// Configurar Typescript : 
// 1) Crear archivo vacio : tsconfig.json
// 2) npm install --save-dev typescript @types/react @types/node
// 3) npm run dev    para que se configure automáticamente el archivo

import {Personas} from "./Personas"

export default function App() {
  return (
    <div>
        <Personas name="Bruno"
        birthDate = {new Date('2020-01-01')}
        birthLocation = {
          { 
            longitude: '20W', 
            latitude: '30N', 
            height: 300
            
          }
        }
      />
    </div>

  )



}