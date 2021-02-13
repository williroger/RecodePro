import './App.css';

import {lazy, Suspense} from  'react';

// import {  } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Texto = lazy(() => import('./Text') );
const Link = lazy(() => import('./Link') );
const ImgLogo = lazy(() => import('./Img') );

function App() {
  return (
    <div className="App">
      <header className="App-header">
    {/* carregando imagem, texto e link */}
        <Suspense fallback={ <p>Carregando...</p> }>
          <ImgLogo/>
        </Suspense>
        
        <Suspense fallback={ <p>Carregando...</p> }>
          <Texto />
        </Suspense>

        <Suspense fallback={ <p>Carregando...</p> }>
          <Link />
        </Suspense>
        


      </header>
    </div>
  );
}

export default App;
