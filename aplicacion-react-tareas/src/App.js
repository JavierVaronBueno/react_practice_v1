import './App.css';
import gemLogo from './imagenes/GEM Seeders.bmp'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='gem-logo-contenedor'>
        <img 
          src={gemLogo}
          className='gem-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
