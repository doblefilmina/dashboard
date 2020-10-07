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
            console.log(screen)
            }}>
            Hola Mundo
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;