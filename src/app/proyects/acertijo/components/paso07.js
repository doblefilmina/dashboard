import React, {useState} from 'react';


const Paso07 = () => {

  return(
    <section id="paso07" className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Séptimo paso</h5>
        </div>
        <h6 className="mb-1">Busco solución final</h6>
        <p className="mb-1">Hasta ahora tenemos un conjunto de soluciones. Un conjuntoA para la pista A y así respectivamente. El conjuntoA tiene guardado en cada posición uno de dos valores: "000" si no se cumplen las condiciones impuestas por la pista A, y el valor de la posición si Sí se cumplen las condiciones impuestas por la pista (por ejemplo, la posición 343 del conjuntoA tiene guardado el valor "0" si NO cumple las condiciones de la pista A, y tiene guardada el valor 343 si SI cumple con las condiciones de la pista A). Lo mismo ocurre con todos los otros conjuntos. <br/> Ahora bien, la solución al acertijo es aquel número que cumple con TODAS las condiciones de TODAS las pistas. Llevado al plano lógico del acertijo, decir un número que cumpla con todas las pistas es lo mismo que decir un número que esté en todos los conjuntos. <br/> Es por esto que la condición que usé es: a partir de un array solucion, que tiene almacenado todos los valores desde el 0 hasta el 999 (posibles soluciones), EL número solución va a ser aquel que simultáneamente esté en todos los conjuntos. Por lo tanto ese número es el que cumpla que en una posición, todos los valores almacenados en cada conjunto son iguales. Cuando se cumple esa condición, se almacena el número y se pone un contador para asegurar que la cantidad de ocurrencias es única. </p>
        <p>
          <a className="btn btn-secondary" data-toggle="collapse" href="#codigo07" role="button" aria-expanded="false" aria-controls="collapseExample">
            Código
          </a>
        </p>
        <div className="collapse" id="codigo07">
          <div className="card card-body">
            <pre><code>
              {`//SOLUCION FINAL
              if ( (solucion[i] == conjuntoA[i]) && (solucion[i] == conjuntoB[i]) && (solucion[i] == conjuntoC[i]) && (solucion[i] == conjuntoD[i] && (solucion[i] == conjuntoE[i]) ) ) {
                  soluciones = soluciones + 1
                  ultima_solucion = solucion[i]
              } }`}
            </code></pre>
          </div>
        </div> 
        <button type="button" className="btn btn-primary mx-auto">FIN</button>
      </div>
    </section>
  )
}

export default Paso07