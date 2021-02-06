export function Person ( {name, birthDate, birthLocation }) {

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