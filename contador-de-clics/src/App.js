import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import GemLogo from './imagenes/GEM Seeders.bmp'
import { useState } from 'react';
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='gem-logo-contenedor'>
        <img 
          className='gem-logo'
          src={GemLogo}
          alt='Logo de GEM'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador 
          numClics={numClics}
        />
        <Boton
          texto='Clic'
          esBotonDeclic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeclic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
