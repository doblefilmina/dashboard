import React, {useState, useEffect} from 'react';
import Dashboard from './proyects/middle' ;
import App_gestionHerramientas from './proyects/gestion-herramientas/frontpage';
import HolaMundo from './proyects/hola-mundo/components/unique';
import Dx from './proyects/DX/dx_frontpage';
import Cv from './proyects/CV/cv';




const App = () => {
  const [screen, setScreen] = useState('dashboard')

  return (
    <div className="App">
      {screen==='dashboard' && <Dashboard setScreen={setScreen} />}
      {screen==='gestion-herramientas' && <App_gestionHerramientas/>}
      {screen==='hola-mundo' && <HolaMundo />}
      {screen==='dx' && <Dx />}
      {screen==='cv' && <Cv />}
     
    </div>
  );
}

export default App;