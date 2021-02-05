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

    exibirProd(){
        fetch("http://localhost/react-php/src/api/")
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