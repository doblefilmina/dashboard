import React, {useState, useEffect} from 'react';
import App_gestionHerramientas from './gestion-herramientas/frontpage';
import holaMundo from '../img/middle/hola-mundo.png';
import deporteX from '../img/middle/deportex.png';
import cv from '../img/middle/cv.png';
import codigo from '../img/middle/codigo.jpg';
import gestion from '../img/middle/gestion.png';
import avatar from '../img/middle/avatar_FB_b_circ.png';



const Dashboard = ({setScreen}) => {
  
  return (
    <div className="dashboard">

      <div className="contenedor-presentacion">
        <div className="presentacion-media">
          <img src={avatar} className="card-img-top" alt="pagina_hola-mundo"/>
          <h4>Federico Brusa</h4>
          <h5>
            <a href="https://github.com/doblefilmina" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/brusafederico" target="_blank"><i class="fab fa-linkedin"></i></a>
          </h5>
        </div>
        <div className="presentacion-texto">
        <h5>Ingeniero Civil que se convirtió en Desarrollador Full Stack</h5>

          <p>Esta página pretende mostrar los proyectos que desarrollé hasta el momento. Muestra un poco la evolución desde mis inicios en Febrero de 2020. Creo que si se navega un poco, se puede conocer mis conocimientos, habilidades y también mi personalidad. </p>
          <p>Hablando de código, ésta es una single-page app creada con React. El Back-End está desarrollado con NodeJS y la librería Express. Se conecta con una base de datos en MongoDB.</p>
        </div>
      </div>
      
      
      <div className="contenedor-tarjetas">

        <div className="tarjeta">
          <h6>Hola Mundo</h6>
          <img src={holaMundo}  alt="pagina_hola-mundo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              El famoso "Hola Mundo!"
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5</span></p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('hola-mundo')
              }}>Visitar Página!</a>
        </div>

        <div className="tarjeta">
          <h6>DeportEXtremo</h6>
          <img src={deporteX} alt="pagina_deportEX"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              Home de Noticias con Bootstrap
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5 #CSS</span></p>
            <p className="tarjeta-texto">Bibliotecas: <span className="negrita"> #Bootstrap #React</span></p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('dx')
              }}>Visitar Página!</a>
        </div>

        <div className="tarjeta">
          <h6>Portfolio fantasía</h6>
          <img src={cv} className="img-fluid" alt="pagina_cv"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              El CV que me gustaría presentar
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5 #CSS@keyframes</span></p>
            <p className="tarjeta-texto">Bibliotecas: <span className="negrita"> #Bootstrap #React</span></p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('cv')
              }}>Visitar Página!</a>
        </div>

        <div className="tarjeta">
          <h6>Acertijo</h6>
          <img src={codigo} alt="pagina_acertijo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              Resolución acertijo por consola
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5 #JS</span></p>
            <p className="tarjeta-texto">Bibliotecas: <span className="negrita">#Bootstrap #React</span></p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('acertijo')
              }}>Visitar Página!</a>
        </div>

        <div className="tarjeta">
          <h6>Gestion de Herramientas</h6>
          <img src={gestion} alt="pagina_acertijo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              App para Gestionar Herramientas
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5 #JS</span></p>
            <p className="tarjeta-texto">Bibliotecas: <span className="negrita">#React #express #webpack</span></p>
            <p className="tarjeta-texto">Entorno: <span className="negrita">#NodeJS</span></p>
            <p className="tarjeta-texto">Base de datos: <span className="negrita">#MongoDB</span></p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('gestion-herramientas')
              }}>Visitar Página!</a>
        </div>

        <div className="tarjeta">
          <h6>Ésta Página</h6>
          <img src={gestion} className="card-img-top" alt="pagina_acertijo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              Portfolio de proyectos
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita"> #HTML5 #CSS #JS</span></p>
            <p className="tarjeta-texto">Bibliotecas: <span className="negrita"> #React #express #webpack</span></p>
            <p className="tarjeta-texto">Entorno: <span className="negrita"> #NodeJS</span></p>
            <p className="tarjeta-texto">Base de datos: <span className="negrita"> #MongoDB</span></p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('gestion-herramientas')
              }}>Visitar Página!</a>
        </div>
        
      </div>
      
      
      <ul>
        <li>
          <div onClick={() => {
            setScreen('gestion-herramientas')
            }}>
            Gestion de herramientas
          </div>
        </li>
        <li>
          <div onClick={() => {
            setScreen('hola-mundo')
            }}>
            Hola Mundo
          </div>
        </li>
        <li>
          <div onClick={() => {
            setScreen('dx')
            }}>
            DeporteXtremo
          </div>
        </li>
        <li>
          <div onClick={() => {
            setScreen('cv')
            }}>
            CV (bootstrap, google fonts, animaciones con keyframes en css)
          </div>
        </li>
        <li>
          <div onClick={() => {
            setScreen('acertijo')
            }}>
            Acertijo
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;