import React from 'react';
const ProgramaNotas = () => {
    const nota = 5
    const titular ="Máquina de aprobar"

    const comprobarNota = (dato) => {
        const respuesta = (dato >= 5) ? 'Aprobado': 'Suspendido'
        return respuesta
      }

    function Titulo (props) {
      const {texto} = props
      return <h1>{texto}</h1>
    }

    const Handler = event => {
      alert(event.target.value)
    }
  
    return (
        <div>
            <Titulo texto={titular} />
            <h3>La nota actual es: {nota}</h3> 
            <p> { comprobarNota(nota)}</p>
            <input  type='text' name= 'campo_nombre' placeholder="escribe aqui"
              onDoubleClick = {Handler}
            />

        </div>
    );
}
export default ProgramaNotas
