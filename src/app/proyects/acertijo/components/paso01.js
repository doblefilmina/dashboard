import React, {useState} from 'react';
import Paso02 from './paso02';

const Paso01 = () => {
  const [screen, setScreen] = useState('paso01')

  const aparece_paso02 = () => {
    setScreen('paso02')
  }

  return(
    <section id="paso01" className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Primer paso</h5>
        </div>
        <h6 className="mb-1">Defino variables necesarias</h6>
        <p className="mb-1">Defino una porción de código donde voy a ir definiendo todas las variables, a medida que las voy necesitando más adelante</p>

        <p>
          <a className="btn btn-secondary" data-toggle="collapse" href="#codigo01" role="button" aria-expanded="false" aria-controls="collapseExample">
            Código
          </a>
        </p>
        <div className="collapse" id="codigo01">
          <div className="card card-body">
            <pre><code>
              {`//Creo array solucion
              var solucion = [0] ;
      
              for (let i = 0; i < 1000; i++) {
                  solucion[i] = i ;           
              }
              //Creo conjunto A 
              var conjuntoA = [0]
              var conjuntoAa = [0]
              var conjuntoAb = [0]
              var conjuntoAc = [0]
              //Creo Conjunto B
              var conjuntoB = [0]
              var conjuntoBa = [0]
              var conjuntoBa1 = [0]
              var conjuntoBa2 = [0]
              var conjuntoBb = [0]
              var conjuntoBb1 = [0]
              var conjuntoBb2 = [0]
              var conjuntoBc = [0]
              var conjuntoBc1 = [0]
              var conjuntoBc2 = [0]
              //Creo Conjunto C
              var conjuntoC = [0]
              var conjuntoCa = [0]
              var conjuntoCa1 = [0]
              var conjuntoCa2 = [0]
              var conjuntoCa3 = [0]
              var conjuntoCb = [0]
              var conjuntoCb1 = [0]
              var conjuntoCb2 = [0]
              var conjuntoCb3 = [0]
              var conjuntoCc = [0]
              var conjuntoCc1 = [0]
              var conjuntoCc2 = [0]
              var conjuntoCc3 = [0]
              //Creo Conjunto D
              var conjuntoD = [0]
              //Creo Conjunto E
              var conjuntoE = [0]
              var conjuntoEa = [0]
              var conjuntoEa1 = [0]
              var conjuntoEa2 = [0]
              var conjuntoEb = [0]
              var conjuntoEb1 = [0]
              var conjuntoEb2 = [0]
              var conjuntoEc = [0]
              var conjuntoEc1 = [0]
              var conjuntoEc2 = [0]
              //Creo variables para las soluciones
              let soluciones = 0
              let ultima_solucion = 0`}
            </code></pre>
          </div>
        </div> 
        <button type="button" id="siguiente_paso01" className="btn btn-primary mx-auto" onClick={aparece_paso02}>Siguiente paso</button>
      </div>
      {screen==='paso02' && <Paso02/>}
    </section>

  )
}

export default Paso01;