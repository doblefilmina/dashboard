import React, {useState} from 'react';
import Paso06 from './paso06';

const Paso05 = () => {
  const [screen, setScreen] = useState('paso05')

  const aparece_paso06 = () => {
    setScreen('paso06')
  }

  return(
    <section id="paso05" className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Quinto paso</h5>
        </div>
        <h6 className="mb-1">Busco conjunto solución según pista D</h6>
        <p className="mb-1">El planteo es análogo al segundo y tercer paso </p>
        <p>
          <a className="btn btn-secondary" data-toggle="collapse" href="#codigo05" role="button" aria-expanded="false" aria-controls="collapseExample">
            Código
          </a>
        </p>
        <div className="collapse" id="codigo05">
          <div className="card card-body">
            <pre><code>
              {`//PISTA D
              if ((centena != 7 && centena != 3 && centena != 8) && (decena != 7 && decena != 3 && decena != 8) && (unidad != 7 && unidad != 3 && unidad != 8) ) {
                  conjuntoD[i] = i ;
              } else {
                  conjuntoD[i] = 0 ;
              }`}
            </code></pre>
          </div>
        </div> 
        <button type="button" id="siguiente_paso05" className="btn btn-primary mx-auto" onClick={aparece_paso06}>Siguiente paso</button>
      </div>
      {screen==='paso06' && <Paso06/>}
    </section>
  )
}

export default Paso05;