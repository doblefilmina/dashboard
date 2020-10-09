import React, {useState} from 'react';
import Paso03 from './paso03';

const Paso02 = () => {
  const [screen, setScreen] = useState('paso02')

  const aparece_paso03 = () => {
    setScreen('paso03')
  }

  return(
    <section id="paso02" className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Segundo paso</h5>
        </div>
        <h6 className="mb-1">Busco conjunto solución según pista A</h6>
        <p className="mb-1">Para encontrar este conjunto definí un conjunto solución "conjuntoA" y tres subconjuntos de trabajo "conjuntoAa, ..Ab y ..Ac" <br/> Cada subconjunto lo que hace es suponer que una cifra de las 3 es correcta y las otras dos no lo son. Por lo tanto evalua (if) si una cifra es igual a la correcta Y (&&) las otras dos son distintas de las incorrectas. <br/> Como los tres subconjuntos son complementarios, es decir que cualquiera puede ser el correcto, para obtener el primer conjunto de posible soluciones se suman los tres subconjuntos </p>

        <p>
          <a className="btn btn-secondary" data-toggle="collapse" href="#codigo02" role="button" aria-expanded="false" aria-controls="collapseExample">
            Código
          </a>
        </p>
        <div className="collapse" id="codigo02">
          <div className="card card-body">
            <pre><code>
              {`for (var i = 1; i < 1000; i++) {
              let centena = Math.trunc(i/100)
              let decena = Math.trunc((i/10)%10)
              let unidad = Math.trunc(i%10)
              //PISTA A    
              //6 es correcto en la primera posición y 8 es incorrecto en la segunda y 2 es incorrecto en la tercera
              if ( ( centena == 6 ) && ( decena != 8) && (unidad != 2) ) {
                conjuntoAa[i] = i ;
              } else {
                conjuntoAa[i] = 0 ;
              }
              // 6 es incorrecto en la primera posición y 8 es correcto en la segunda y 2 es incorrecto en la tercera
              if ( ( centena != 6 ) && ( decena == 8) && (unidad != 2) ) {
                conjuntoAb[i] = i ;                      
              } else {
                conjuntoAb[i] = 0 ;
              }
              // 6 es incorrecto en la primera posición y 8 es incorrecto en la segunda y 2 es correcto en la tercera
              if ( ( centena != 6 ) && ( decena != 8) && (unidad == 2) ) {
                conjuntoAc[i] = i ;                      
              } else {
                conjuntoAc[i] = 0 ;
              }
              conjuntoA[i] = conjuntoAa[i] + conjuntoAb[i] + conjuntoAc[i]`}
            </code></pre>
          </div>
        </div> 
        <button type="button" id="siguiente_paso02" className="btn btn-primary mx-auto" onClick={aparece_paso03}>Siguiente paso</button>
      </div>
      {screen==='paso03' && <Paso03/>}
    </section>


  )
}

export default Paso02;