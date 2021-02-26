import {Person} from "./Person"

export default function App() {
  return (
    <div>
      <Person name="Bruno"
        birthDate = {new Date('2020-01-01')}
        birthLocation = {{ longitude: '20W', latitude: '30N', heigth:300}}
      />
    </div>

  )



}