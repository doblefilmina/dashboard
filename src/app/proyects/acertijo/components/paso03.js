import React, {useState} from 'react';
import Paso04 from './paso04';

const Paso03 = () => {
  const [screen, setScreen] = useState('paso03')

  const aparece_paso04 = () => {
    setScreen('paso04')
  }

  return(
    <section id="paso03" className="list-group">
        <div className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Tercer paso</h5>
          </div>
          <h6 className="mb-1">Busco conjunto solución según pista B</h6>
          <p className="mb-1">Para encontrar este conjunto definí un conjunto solución "conjuntoB" y tres subconjuntos "conjuntoBa, ..Bb y ..Bc" de trabajo y dos sub-subconjuntos por cada uno de los últimos "conjuntoBa1, ..Ba2, ..Bb1, Bb2, .. y ..Bc2" <br/> Cada subconjunto lo que hace es suponer que una cifra de las 3 es correcta en una posición específica (distinta a la original) y las otras dos no lo son. Por lo tanto evalua (if) si una cifra es igual a la correcta Y (&&) las otras dos son distintas de las incorrectas. Y esta prueba hay que hacerla con la cifra correcta, en dos posiciones distintas <br/> Como los tres subconjuntos son complementarios, es decir que cualquiera puede ser el correcto, para obtener el segundo conjunto de posible soluciones (conjuntoB) se suman los tres subconjuntos </p>
          <p>
            <a className="btn btn-secondary" data-toggle="collapse" href="#codigo03" role="button" aria-expanded="false" aria-controls="collapseExample">
              Código
            </a>
          </p>
          <div className="collapse" id="codigo03">
            <div className="card card-body">
              <pre><code>
                {` //PISTA B
                //6 es correcto en la segunda posición y (1, 4 y 6) son incorrectos en la primera y tercera posición
                if ( ( centena != 1 && centena != 4 && centena != 6 ) && ( decena == 6) && (unidad != 1 && unidad != 4 && unidad != 6) ) {
                  conjuntoBa1[i] = i ;
                } else {
                  conjuntoBa1[i] = 0 ;
                }
                //6 es correcto en la tercera posición y (1, 4 y 6) son incorrectos en la primera y segunda posición
                if ( ( centena != 1 && centena != 4 && centena != 6 ) && ( decena != 1 && decena != 4 && decena != 6 ) && (unidad == 6) ) {
                  conjuntoBa2[i] = i ;
                } else {
                  conjuntoBa2[i] = 0 ;
                }
                conjuntoBa[i] = conjuntoBa1[i] + conjuntoBa2[i]    
                //1 es correcto en la primera posición y (1, 4 y 6) son incorrectos en la segunda y tercera posición
                if ( ( centena == 1 ) && ( decena != 1 && decena != 4 && decena != 6) && (unidad != 1 && unidad != 4 && unidad != 6) ) {
                  conjuntoBb1[i] = i ;
                } else {
                  conjuntoBb1[i] = 0 ;
                }
                //1 es correcto en la tercera posición y (1, 4 y 6) son incorrectos en la primera y segunda posición
                if ( ( centena != 1 && centena != 4 && centena != 6 ) && ( decena != 1 && decena != 4 && decena != 6) && (unidad == 1) ) {
                  conjuntoBb2[i] = i ;
                } else {
                  conjuntoBb2[i] = 0 ;
                }
                conjuntoBb[i] = conjuntoBb1[i] + conjuntoBb2[i]
    
                //4 es correcto en la primera posición y (1, 4 y 6) son incorrectos en la segunda y tercera posición
                if ( ( centena == 4 ) && ( decena != 1 && decena != 4 && decena != 6) && (unidad != 1 && unidad != 4 && unidad != 6) ) {
                  conjuntoBc1[i] = i ;
                } else {
                  conjuntoBc1[i] = 0 ;
                }
                //4 es correcto en la segunda posición y (1, 4 y 6) son incorrectos en la primera y tercera posición
                if ( ( centena != 1 && centena != 4 && centena != 6 ) && (decena == 4) && (unidad != 1 && unidad != 4 && unidad != 6) ) {
                  conjuntoBc2[i] = i ;
                } else {
                  conjuntoBc2[i] = 0 ;
                }
                conjuntoBc[i] = conjuntoBc1[i] + conjuntoBc2[i]
    
                conjuntoB[i] = conjuntoBa[i] + conjuntoBb[i] + conjuntoBc[i] `}        
              </code></pre>
            </div>
          </div> 
          <button type="button" id="siguiente_paso03" className="btn btn-primary mx-auto" onClick={aparece_paso04}>Siguiente paso</button>
        </div>
        {screen==='paso04' && <Paso04/>}
    </section>


  )
}

export default Paso03;