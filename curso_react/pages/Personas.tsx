

interface Location {
  longitude: string
  latitude: string
  /** 
  * Comentario : La altura va en metros 
  */
  height: number
}


interface PersonasProps {
  name:string
  birthDate: Date
  birthLocation: Location
}

export function Personas( {name, birthDate, birthLocation }: PersonasProps) {

return (
  <div>
    <div>Name: {name}</div>
    <div>Birth Date:{birthDate.toISOString()} </div>
    <div>Loc Latitude:{birthLocation.latitude} </div>
    <div>Loc Longitude:{birthLocation.longitude} </div>
    <div>Loc height:{birthLocation.height} </div>
  </div>
)

}