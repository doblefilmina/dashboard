import React, {useState, useEffect} from 'react';
import App_gestionHerramientas from './gestion-herramientas/frontpage';



const Dashboard = ({setScreen}) => {
  
  return (
    <div>
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
      </ul>
    </div>
  );
}

export default Dashboard;