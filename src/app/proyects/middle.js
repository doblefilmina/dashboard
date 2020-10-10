import React, {useState, useEffect} from 'react';
import App_gestionHerramientas from './gestion-herramientas/frontpage';
import holaMundo from '../img/middle/hola-mundo.png';
import deporteX from '../img/middle/deportex.png';
import cv from '../img/middle/cv.png';
import codigo from '../img/middle/codigo.jpg';
import gestion from '../img/middle/gestion.png';



const Dashboard = ({setScreen}) => {
  
  return (
    <div className="dashboard">
      <div className="contenedor">
       

          <div className="tarjeta">
            <h6>Hola Mundo</h6>
            <img src={holaMundo} className="card-img-top" alt="pagina_hola-mundo"/>
            <div className="card-body">
              <p className="card-text">
                El famoso "Hola Mundo!"
              </p>
              <p className="card-text">Lenguajes: #HTML5</p>
              <a href="#" className="btn btn-primary" onClick={() => {
                setScreen('hola-mundo')
                }}>Visitar Página!</a>
            </div> 
          </div>

          <div className="tarjeta">
            <h6>DeportEXtremo</h6>
            <img src={deporteX} className="card-img-top" alt="pagina_deportEX"/>
            <div className="card-body">
              <p className="card-text">
                Home de Noticias con Bootstrap
              </p>
              <p className="card-text">Lenguajes: #HTML5 #CSS</p>
              <p className="card-text">Bibliotecas: #Bootstrap #React</p>
              <a href="#" className="btn btn-primary" onClick={() => {
                setScreen('dx')
                }}>Visitar Página!</a>
            </div> 
          </div>

          <div className="tarjeta">
            <h6>Portfolio fantasía</h6>
            <img src={cv} className="card-img-top" alt="pagina_cv"/>
            <div className="card-body">
              <p className="card-text">
                El CV que me gustaría presentar
              </p>
              <p className="card-text">Lenguajes: #HTML5 #CSS@keyframes</p>
              <p className="card-text">Bibliotecas: #Bootstrap #React</p>
              <a href="#" className="btn btn-primary" onClick={() => {
                setScreen('cv')
                }}>Visitar Página!</a>
            </div> 
          </div>

          <div className="tarjeta">
            <h6>Acertijo</h6>
            <img src={codigo} className="card-img-top" alt="pagina_acertijo"/>
            <div className="card-body">
              <p className="card-text">
                Resolución acertijo por consola
              </p>
              <p className="card-text">Lenguajes: #HTML5 #JS</p>
              <p className="card-text">Bibliotecas: #Bootstrap #React</p>
              <a href="#" className="btn btn-primary" onClick={() => {
                setScreen('acertijo')
                }}>Visitar Página!</a>
            </div> 
          </div>

          <div className="tarjeta">
            <h6>Gestion de Herramientas</h6>
            <img src={gestion} className="card-img-top" alt="pagina_acertijo"/>
            <div className="card-body">
              <p className="card-text">
                App para Gestionar Herramientas
              </p>
              <p className="card-text">Lenguajes: #HTML5 #JS</p>
              <p className="card-text">Bibliotecas: #React #express</p>
              <p className="card-text">Entorno: #NodeJS</p>
              <p className="card-text">Base de datos: #MongoDB</p>
              <a href="#" className="btn btn-primary" onClick={() => {
                setScreen('gestion-herramientas')
                }}>Visitar Página!</a>
            </div> 
          </div>

          <div className="tarjeta">
            <h6>Gestion de Herramientas</h6>
            <img src={gestion} className="card-img-top" alt="pagina_acertijo"/>
            <div className="card-body">
              <p className="card-text">
                App para Gestionar Herramientas
              </p>
              <p className="card-text">Lenguajes: #HTML5 #JS</p>
              <p className="card-text">Bibliotecas: #React #express</p>
              <p className="card-text">Entorno: #NodeJS</p>
              <p className="card-text">Base de datos: #MongoDB</p>
              <a href="#" className="btn btn-primary" onClick={() => {
                setScreen('gestion-herramientas')
                }}>Visitar Página!</a>
            </div> 
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