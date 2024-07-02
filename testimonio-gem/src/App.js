import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los socios GEM</h1>
        <Testimonio
          textoImagen='nahia' 
          nombre='Nahia Varon'
          pais='Colombia'
          imagen='nahia'
          cargo='Ingniera Software'
          empresa='Spotify'
          testimonio='Aliquam laoreet, urna at convallis dignissim, ipsum mi malesuada ante, sed blandit est sapien quis turpis. Suspendisse orci odio, malesuada sit amet nulla et, aliquam suscipit justo. Aliquam consequat lectus ac orci feugiat tincidunt.'
        />
        <Testimonio
          textoImagen='logan' 
          nombre='Logan Gaitan'
          pais='Brasil'
          imagen='logan'
          cargo='Ingniera Software'
          empresa='GEM'
          testimonio='Aliquam laoreet, urna at convallis dignissim, ipsum mi malesuada ante, sed blandit est sapien quis turpis. Suspendisse orci odio, malesuada sit amet nulla et, aliquam suscipit justo. Aliquam consequat lectus ac orci feugiat tincidunt.'
        />
        <Testimonio
          textoImagen='andrew' 
          nombre='Andrew Agudelo'
          pais='EE.UU'
          imagen='andrew'
          cargo='Ingniera Software'
          empresa='Google'
          testimonio='Aliquam laoreet, urna at convallis dignissim, ipsum mi malesuada ante, sed blandit est sapien quis turpis. Suspendisse orci odio, malesuada sit amet nulla et, aliquam suscipit justo. Aliquam consequat lectus ac orci feugiat tincidunt.'
        />
      </div>
    </div>
  );
}

export default App;
