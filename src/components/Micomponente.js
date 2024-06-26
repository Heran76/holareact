import React, {useState} from 'react'




export const Micomponente = ({year}) => {
const [yearactual, setYearactual] = useState(year);



 const after = e =>{
    setYearactual(yearactual-1)
 } 

 const before = e =>{
    setYearactual(yearactual+1)
 } 

const cambiar = e =>{
    let dato = parseInt(e.target.value)

    if(Number.isInteger){
        setYearactual(dato)
    }else{
        setYearactual(year)
    }
} 
 
  
return (
    <frameElement>
        <h2>Ejercicio de Eventos y UseState</h2>
        <hr></hr>
        <section className='label label-green'>
            <strong>El año actual es : </strong>{yearactual}
        </section>
        <section>
            <button onClick={after}>Despues</button>
            &nbsp;
            <button onClick={before}>Anterior</button>
        </section>
        <section>
            Cambia el año : 
            <input
            onChange={cambiar}
            type="text"
            placeholder='Introduce un año'
            >
            </input>
        </section>
    </frameElement>
  )
}
