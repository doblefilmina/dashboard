import React, {useState, useEffect} from 'react';
import Dashboard from './proyects/middle' ;
import App_gestionHerramientas from './proyects/gestion-herramientas/frontpage';
import HolaMundo from './proyects/hola-mundo/components/unique';



const App = () => {
  const [screen, setScreen] = useState('dashboard')

  return (
    <div className="App">
      {screen==='dashboard' && <Dashboard setScreen={setScreen} />}
      {screen==='gestion-herramientas' && <App_gestionHerramientas setScreen={setScreen} />}
      {screen==='hola-mundo' && <HolaMundo setScreen={setScreen} />}
    </div>
  );
}

export default App;