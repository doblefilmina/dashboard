        
        if( document.querySelector(".acertijo") ) {
        
        //COMANDOS PARA APARICIÓN DE PASOS SUCESIVOS
        let boton_resolucion01 = document.querySelector("#resolucion01")
        let boton_siguiente_paso_01 = document.querySelector("#siguiente_paso01")
        let boton_siguiente_paso_02 = document.querySelector("#siguiente_paso02")
        let boton_siguiente_paso_03 = document.querySelector("#siguiente_paso03")
        let boton_siguiente_paso_04 = document.querySelector("#siguiente_paso04")
        let boton_siguiente_paso_05 = document.querySelector("#siguiente_paso05")
        let boton_siguiente_paso_06 = document.querySelector("#siguiente_paso06")
        
        
        boton_resolucion01.onclick = aparece_paso01
        boton_siguiente_paso_01.onclick = aparece_paso02 
        boton_siguiente_paso_02.onclick = aparece_paso03 
        boton_siguiente_paso_03.onclick = aparece_paso04 
        boton_siguiente_paso_04.onclick = aparece_paso05 
        boton_siguiente_paso_05.onclick = aparece_paso06 
        boton_siguiente_paso_06.onclick = aparece_paso07 
        
        //función aparecer paso01
        function aparece_paso01 () {
            let seccion_paso01 = document.querySelector("#paso01")
            seccion_paso01.classList.remove("d-none")
        }

        //función aparecer paso02
        function aparece_paso02 () {
            let seccion_paso02 = document.querySelector("#paso02")
            seccion_paso02.classList.remove("d-none")
        }

        //función aparecer paso03
        function aparece_paso03 () {
            let seccion_paso03 = document.querySelector("#paso03")
            seccion_paso03.classList.remove("d-none")
        }

        //función aparecer paso04
        function aparece_paso04 () {
            let seccion_paso04 = document.querySelector("#paso04")
            seccion_paso04.classList.remove("d-none")
        }

        //función aparecer paso05
        function aparece_paso05 () {
            let seccion_paso05 = document.querySelector("#paso05")
            seccion_paso05.classList.remove("d-none")
        }

        //función aparecer paso06
        function aparece_paso06 () {
            let seccion_paso06 = document.querySelector("#paso06")
            seccion_paso06.classList.remove("d-none")
        }

        //función aparecer paso07
        function aparece_paso07 () {
            let seccion_paso07 = document.querySelector("#paso07")
            seccion_paso07.classList.remove("d-none")
        }
        
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



/*      
console.log(conjuntoA[999])
console.log(conjuntoA[42])
console.log(conjuntoA[082])
console.log("conjuntoAa(999)")
console.log(conjuntoAa[999])
console.log("conjuntoAb(999)")
console.log(conjuntoAb[999])
console.log("conjuntoAc(999)")
console.log(conjuntoAc[999])
console.log("conjuntoAa(42)")
console.log(conjuntoAa[42])
console.log("conjuntoAb(42)")
console.log(conjuntoAb[42])
console.log("conjuntoAc(42)")
console.log(conjuntoAc[42])
console.log("conjuntoAa(82)")
console.log(conjuntoAa[82])
console.log("conjuntoAb(82)")
console.log(conjuntoAb[82])
console.log("conjuntoAc(82)")
console.log(conjuntoAc[82])
*/

}


        