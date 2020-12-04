import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default class Tabela extends React.Component{
    
    // allCategories(event) {
    //     console.log(event.target)
    // }
    // filterCategory(event) {
    //     console.log(event.target.id)
    //     const cat = event.target.id
    //     const card = document.getElementsByClassName('prodcard')
    //     console.log(card[0].id)
    //     card.map(prod=>{
    //         console.log(prod)
    //         // (
    //         //     cat === prod.id 
    //         // )?(
    //         //     prod.style="display:none"
    //         // ):(
    //         //     prod.style="display:block"
    //         // )
    //     })
    // }

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-2">
                <h3>Categorias</h3> 
                <ul>
                    <li onClick={this.allCategories}>Todos (10)</li> 
                    <li id="geladeiras" onClick={this.filterCategory}>Geladeiras (2)</li>
                    <li id="fogoes" onClick={this.filterCategory}>Fogão (2)</li> 
                    <li id="lavadoura" onClick={this.filterCategory}>Lavadoras (4)</li> 
                    <li id="microondas" onClick={this.filterCategory}>Microondas (2)</li> 
                    <li id="lavaloucas" onClick={this.filterCategory}>Lava-Loucas (2)</li> 
                </ul> 
                </div>
        <div className="col-10">
            <div className="d-flex flex-wrap justify-content-around">  
                {this.props.arrayProd.map(
                    row=>
                <div className="prodcard" style={{width:"300px", height:"450px", display:'block'}} key={row.id_prod} id={row.nome_prod}>
                    <Card>
                    <CardBody>
                    <CardImg top src={require(`${row.img_prod}`).default} alt={row.descricao_prod} />
                    <CardTitle tag="h5">{row.descricao_prod}</CardTitle>
                    <Button color="danger">R$ {row.preco_prod}</Button>
                    <Button color="primary">Comprar</Button>

                    </CardBody>
                    </Card>
                </div>
                )}
        </div>
            </div>
            </div>
            </div>
        );
    }
}
