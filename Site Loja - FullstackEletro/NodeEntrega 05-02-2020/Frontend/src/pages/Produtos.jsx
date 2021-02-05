import React from 'react';
import Tabela from './Tabela';

export default class App extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
        });
        this.exibirProd();
    }
    // JOSE AQUI A CONEXÃO
    exibirProd(){
        fetch("http://localhost:3333/api-produtos")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
        })
    }

    render() {
        return(
            <div>
            <Tabela arrayProd={this.state.db}/>
            </div>
        );
    }
}