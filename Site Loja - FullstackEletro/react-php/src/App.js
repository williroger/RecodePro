import React from 'react';
import Headers from './components/Headers.jsx';
import Section from './components/Section.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import NossasLojas from './pages/NossasLojas';
import 'bootstrap/dist/css/bootstrap.min.css';


function App (props) {
    return (
        <Router>
        <div>
            <Headers />
            <Route path="/" exact component={Section}/>
            <Route path="/produtos" component={Produtos}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/nossaslojas" component={NossasLojas}/>
            <Footer />
        </div>
        </Router>
    );
};


export default App;