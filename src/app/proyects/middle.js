import React, {useState, useEffect} from 'react';
import App_gestionHerramientas from './gestion-herramientas/frontpage';
import holaMundo from '../img/middle/hola-mundo.png';
import deporteX from '../img/middle/deportex.png';
import cv from '../img/middle/cv.png';
import codigo from '../img/middle/codigo.jpg';
import gestion from '../img/middle/gestion.png';
import avatar from '../img/middle/avatar_FB_b_circ.png';
import portfolio from '../img/middle/portfolio.png';
import mosca from '../img/middle/mosca.jpg';
import firpo from '../img/dx/firpo.jpg';



const Dashboard = ({setScreen}) => {
  
  return (
    <div className="dashboard">

      <div className="contenedor-presentacion">
        <div className="presentacion-media">
          <img src={avatar} className="img-fluid" alt="Federico Brusa"/>
          <h4>Federico Brusa</h4>
          <h5>
            <a href="https://github.com/doblefilmina" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/brusafederico" target="_blank"><i className="fab fa-linkedin"></i></a>
          </h5>
        </div>
        <div className="presentacion-texto">
        <h5>Ingeniero Civil que se convirtió en Desarrollador Full Stack</h5>

          <p>Esta página pretende mostrar los proyectos que desarrollé hasta el momento. Muestra la evolución desde mis inicios en Febrero de 2020. A través de la navegación de esta página podrás conocer mis habilidades. </p>
          <p>Si te gusta mi trabajo, no dudes en contactarte conmigo a través de Linkedin</p>
        </div>
      </div>
      
      
      <div className="contenedor-tarjetas">

        <div className="tarjeta">
          <h6>Hola Mundo</h6>
          <img src={holaMundo} className="img-fluid w-100"  alt="pagina_hola-mundo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              El famoso "Hola Mundo!"
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5</span></p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
            <p className="tarjeta-texto"><span className="negrita"></span> </p>
          </div> 
          <button href="#" className="boton" onClick={() => {
              setScreen('hola-mundo')
              }}>Ver Proyecto!</button>
        </div>

        <div className="tarjeta">
          <h6>DeportEXtremo</h6>
          <img src={firpo} className="img-fluid w-100" alt="pagina_deportEX"/>
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
              }}>Ver Proyecto!</a>
        </div>

        <div className="tarjeta">
          <h6>Portfolio fantasía</h6>
          <img src={cv} className="img-fluid w-100" alt="pagina_cv"/>
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
              }}>Ver Proyecto!</a>
        </div>

        <div className="tarjeta">
          <h6>Acertijo</h6>
          <img src={codigo} className="img-fluid w-100" alt="pagina_acertijo"/>
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
              }}>Ver Proyecto!</a>
        </div>

        <div className="tarjeta">
          <h6>Gestion de Herramientas</h6>
          <img src={gestion} className="img-fluid w-100" alt="pagina_acertijo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              App para Gestionar Herramientas (en construcción)
            </p>
            <p className="tarjeta-texto">Lenguajes: <span className="negrita">#HTML5 #JS</span></p>
            <p className="tarjeta-texto">Bibliotecas: <span className="negrita">#React #express #webpack</span></p>
            <p className="tarjeta-texto">Entorno: <span className="negrita">#NodeJS</span></p>
            <p className="tarjeta-texto">Base de datos: <span className="negrita">#MongoDB</span></p>
          </div> 
          <a href="#" className="boton" onClick={() => {
              setScreen('gestion-herramientas')
              }}>Ver Proyecto!</a>
        </div>

        <div className="tarjeta">
          <h6>Ésta Página</h6>
          <img src={portfolio} className="img-fluid w-100" alt="pagina_acertijo"/>
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
              setScreen('dashboard')
              }}>Ver Proyecto!</a>
        </div>

        <div className="tarjeta">
          <h6>Mosca Pariendo parásitos</h6>
          <img src={mosca} className="img-fluid w-100" alt="mosca_pariendo"/>
          <div className="tarjeta-cuerpo">
            <p className="tarjeta-texto">
              Video propio de Youtube muy asqueroso
            </p>
            <p className="tarjeta-texto">Si llegaste hasta acá, y no sos una persona impresionable, te dejo un video para distender un poco. Va llegando al millón de reproducciones!</p>
            
          </div> 
          <a href="https://youtu.be/6IsoIAwyAAY" target="_blank" className="boton">Ver Video!</a>
        </div>
        
      </div>
      
    </div>
  );
}

export default Dashboard;