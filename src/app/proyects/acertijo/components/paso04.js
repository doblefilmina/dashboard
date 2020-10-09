import React, {useState} from 'react';
import Paso05 from './paso05';

const Paso04 = () => {
  const [screen, setScreen] = useState('paso04')

  const aparece_paso05 = () => {
    setScreen('paso05')
  }

  return(
    <section id="paso04" className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Cuarto paso</h5>
        </div>
        <h6 className="mb-1">Busco conjunto solución según pista C</h6>
        <p className="mb-1">El planteo es análogo al segundo y tercer paso </p>
        <p>
          <a className="btn btn-secondary" data-toggle="collapse" href="#codigo04" role="button" aria-expanded="false" aria-controls="collapseExample">
            Código
          </a>
        </p>
        <div className="collapse" id="codigo04">
          <div className="card card-body">
            <pre><code>
              {`//PISTA C

              //0 y 2 son correctos en primera y segunda posición y 6 es incorrecto
              if ( ( centena == 0 ) && ( decena == 2) && ( unidad != 6 ) ) {
                conjuntoCa1[i] = i ;
              } else {
                conjuntoCa1[i] = 0 ;
              }
              //2 y 0 son correctos en segunda y tercera posición y 6 es incorrecto
              if ( ( centena != 0 && centena != 2 && centena != 6 ) && ( decena == 2) && ( unidad == 0 ) ) {
                conjuntoCa2[i] = i ;
              } else {
                conjuntoCa2[i] = 0 ;
              }
              //0 y 2 son correctos en primera y tercera posición y 6 es incorrecto
              if ( ( centena == 0 ) && ( decena != 6) && ( unidad == 2 ) ) {
                conjuntoCa3[i] = i ;
              } else {
                conjuntoCa3[i] = 0 ;
              }
              conjuntoCa[i] = conjuntoCa1[i] + conjuntoCa2[i] + conjuntoCa3[i]
  
              //6 y 0 son correctos en segunda y tercera posición y 2 es incorrecto
              if ( ( centena != 2 ) && ( decena == 6) && ( unidad == 0 ) ) {
                conjuntoCb1[i] = i ;
              } else {
                conjuntoCb1[i] = 0 ;
              }
              //0 y 6 son correctos en primera y segunda posición y 2 es incorrecto
              if ( ( centena == 0 ) && ( decena == 6) && ( unidad != 2 ) ) {
                conjuntoCb2[i] = i ;
              } else {
                conjuntoCb2[i] = 0 ;
              }
              //6 y 0 son correctos en primera y tercera posición y 2 es incorrecto
              if ( ( centena == 6 ) && ( decena != 2) && ( unidad == 0 ) ) {
                conjuntoCb3[i] = i ;
              } else {
                conjuntoCb3[i] = 0 ;
              }
              conjuntoCb[i] = conjuntoCb1[i] + conjuntoCb2[i] + conjuntoCb3[i]
  
              //6 y 2 son correctos en primera y tercera posición y 0 es incorrecto
              if ( ( centena == 6 ) && ( decena != 0) && ( unidad == 2 ) ) {
                conjuntoCc1[i] = i ;
              } else {
                conjuntoCc1[i] = 0 ;
              }
              //6 y 2 son correctos en segunda y tercera posición y 0 es incorrecto
              if ( ( centena != 0 ) && ( decena == 6) && ( unidad == 2 ) ) {
                conjuntoCc2[i] = i ;
              } else {
                conjuntoCc2[i] = 0 ;
              }
              //6 y 2 son correctos en primera y segunda posición y 0 es incorrecto
              if ( ( centena == 6 ) && ( decena == 2) && ( unidad != 0 ) ) {
                conjuntoCc3[i] = i ;
              } else {
                conjuntoCc3[i] = 0 ;
              }
              conjuntoCc[i] = conjuntoCc1[i] + conjuntoCc2[i] + conjuntoCc3[i]
              
              conjuntoC[i] = conjuntoCa[i] + conjuntoCb[i] + conjuntoCc[i]`}
        
            </code></pre>
          </div>
        </div> 
        <button type="button" id="siguiente_paso04" className="btn btn-primary mx-auto" onClick={aparece_paso05}>Siguiente paso</button>
      </div>
      {screen==='paso05' && <Paso05/>}
    </section>


  )
}

export default Paso04;