import React, {useState} from 'react';
import Paso07 from './paso07';

const Paso06 = () => {
  const [screen, setScreen] = useState('paso06')

  const aparece_paso07 = () => {
    setScreen('paso07')
  }

  return(
    <section id="paso06" className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Sexto paso</h5>
        </div>
        <h6 className="mb-1">Busco conjunto solución según pista E</h6>
        <p className="mb-1">El planteo es análogo al segundo y tercer paso </p>
        <p>
          <a className="btn btn-secondary" data-toggle="collapse" href="#codigo06" role="button" aria-expanded="false" aria-controls="collapseExample">
            Código
          </a>
        </p>
        <div className="collapse" id="codigo06">
          <div className="card card-body">
            <pre><code>
              {`//PISTA E
              //7 es correcto en la segunda posición y (7, 8 y 0) son incorrectos en la primera y tercera posición
              if ( ( centena != 7 && centena != 8 && centena != 0 ) && ( decena == 7) && (unidad != 7 && unidad != 8 && unidad != 0) ) {
                conjuntoEa1[i] = i ;
              } else {
                conjuntoEa1[i] = 0 ;
              }
              //7 es correcto en la tercera posición y (7, 8 y 0) son incorrectos en la primera y segunda posición
              if ( ( centena != 7 && centena != 8 && centena != 0 ) && ( decena != 7 && decena != 8 && decena != 0 ) && (unidad == 7) ) {
                conjuntoEa2[i] = i ;
              } else {
                conjuntoEa2[i] = 0 ;
              }
              conjuntoEa[i] = conjuntoEa1[i] + conjuntoEa2[i]
              //8 es correcto en la primera posición y (7, 8 y 0) son incorrectos en la segunda y tercera posición
              if ( ( centena == 8 ) && ( decena != 7 && decena != 8 && decena != 0 ) && (unidad != 7 && unidad != 8 && unidad != 0) ) {
                conjuntoEb1[i] = i ;
              } else {
                conjuntoEb1[i] = 0 ;
              }
              //8 es correcto en la tercera posición y (7, 8 y 0) son incorrectos en la primera y segunda posición
              if ( ( centena != 7 && centena != 8 && centena != 0 ) && ( decena != 7 && decena != 8 && decena != 0) && (unidad == 8) ) {
                conjuntoEb2[i] = i ;
              } else {
                conjuntoEb2[i] = 0 ;
              }
              conjuntoEb[i] = conjuntoEb1[i] + conjuntoEb2[i]

              //0 es correcto en la primera posición y (7, 8 y 0) son incorrectos en la segunda y tercera posición
              if ( ( centena == 0 ) && ( decena != 7 && decena != 8 && decena != 0) && (unidad != 7 && unidad != 8 && unidad != 0) ) {
                conjuntoEc1[i] = i ;
              } else {
                conjuntoEc1[i] = 0 ;
              }
              //0 es correcto en la segunda posición y (7, 8 y 0) son incorrectos en la primera y tercera posición
              if ( ( centena != 7 && centena != 8 && centena != 0 ) && (decena == 0) && (unidad != 7 && unidad != 8 && unidad != 0) ) {
                conjuntoEc2[i] = i ;
              } else {
                  conjuntoEc2[i] = 0 ;
              }
              conjuntoEc[i] = conjuntoEc1[i] + conjuntoEc2[i]
  
              conjuntoE[i] = conjuntoEa[i] + conjuntoEb[i] + conjuntoEc[i]`}
            </code></pre>
          </div>
        </div> 
        <button type="button" id="siguiente_paso06" className="btn btn-primary mx-auto" onClick={aparece_paso07}>Siguiente paso</button>
      </div>
      {screen==='paso07' && <Paso07/>}
    </section>
  )
}

export default Paso06;