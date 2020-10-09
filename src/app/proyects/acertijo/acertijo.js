import React, {useState} from 'react';
import Paso01 from './components/paso01';
import codigo from '../../img/acertijo/codigo.jpg';



const Acertijo = () => {
  const [screen, setScreen] = useState('resolucion01')
  
  const resolucion = () => {
    //Creo array solucion
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
    let ultima_solucion = 0
 

    for (var i = 1; i < 1000; i++) {
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

        conjuntoA[i] = conjuntoAa[i] + conjuntoAb[i] + conjuntoAc[i]

    //PISTA B

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


        conjuntoB[i] = conjuntoBa[i] + conjuntoBb[i] + conjuntoBc[i]



        //PISTA C

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
        
        conjuntoC[i] = conjuntoCa[i] + conjuntoCb[i] + conjuntoCc[i]


        //PISTA D

        if ((centena != 7 && centena != 3 && centena != 8) && (decena != 7 && decena != 3 && decena != 8) && (unidad != 7 && unidad != 3 && unidad != 8) ) {
            conjuntoD[i] = i ;
        } else {
            conjuntoD[i] = 0 ;
        }

        //PISTA E

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


        conjuntoE[i] = conjuntoEa[i] + conjuntoEb[i] + conjuntoEc[i]

        if ( (solucion[i] == conjuntoA[i]) && (solucion[i] == conjuntoB[i]) && (solucion[i] == conjuntoC[i]) && (solucion[i] == conjuntoD[i] && (solucion[i] == conjuntoE[i]) ) ) {
            soluciones = soluciones + 1
            ultima_solucion = solucion[i]
        }

    }

console.log("cantidad de soluciones encontradas")
console.log(soluciones)
console.log("última solución")
console.log(ultima_solucion)
  }

  const aparece_paso01 = () => {
    setScreen('paso01')
  }

  resolucion() 

  return (
  <div className="acertijo">
    <div className="container-fluid">
      <section className="row">
        <h3 className="col-sm-12 col-md-9">Acertijo 1</h3>
        <img src={codigo} alt="codigo" className="img-fluid"/>
      </section>
      <section className="row">
        <button type="button" id="resolucion01" className="btn btn-primary btn-lg offset-sm-1 col-sm-4 m-5" onClick={aparece_paso01}>Resolucion 1</button>
        <button type="button" className="btn btn-primary btn-lg offset-sm-1 col-sm-4 m-5">Resolucion 2</button>
      </section>

      {screen==='paso01' && <Paso01/>}
   </div>  
  </div>  
  )
 }

 export default Acertijo;