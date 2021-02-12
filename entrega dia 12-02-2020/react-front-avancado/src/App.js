import './App.css';

import {lazy, Suspense} from  'react';

const Texto = lazy(() => import('./Text') );
const Link = lazy(() => import('./Link') );
const ImgLogo = lazy(() => import('./Img') );

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Suspense fallback={ <p>Carregando</p> }>
          <ImgLogo/>
        </Suspense>
        
        <Suspense fallback={ <p>Carregando</p> }>
          <Texto />
        </Suspense>

        <Suspense fallback={ <p>Carregando</p> }>
          <Link />
        </Suspense>
        


      </header>
    </div>
  );
}

export default App;
