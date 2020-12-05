import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
  } from 'reactstrap';

export default class Tabela extends React.Component{
    
// //     // allCategories(event) {
// //     //     //console.log(event.target)
// //     // }
//     filterCategory(event) {
//         console.log(card.length)
//         const cat = event.target.id
//         const card = document.getElementsByClassName('prodcard')
//         for(var i=0; i<card.length; i++){
//                         if(event == cat[i].id)
//                          card[i].style = "display:inline-block";
//                          else
//                          card[i].style = "display:none";
//                     }

// //              elementos[i].style = "display:inline-block";
    
//         //console.log(card[3].id)
//         // card.map(prod=>{
//         //   
//         //     (
//         //         cat === prod.id 
//         //     )?(
//         //         prod.style="display:none"
//         //     ):(
//         //         prod.style="display:block"
//         //     )
//         // })
//     }

// exibir_categorias(categorias){
//     const elementos = document.getElementsByClassName("prodcard")
//     for(var i=0; i<elementos.length; i++){
//         if(categorias == elementos[i].id)
//          elementos[i].style = "display:block";
//          else
//          elementos[i].style = "display:none";
//     }
// }

    render(){
        return(
            <div className="container m-2">
            <div className="row m-2">
                <div className="col-3 d-flex flex-wrap">

                <div className="col-2" id="left">
                <h4>Categorias</h4> 
                    <ul class="list-group">
                        <li onclick="exibir_todos()" class="list-group-item d-flex justify-content-between align-items-center">
                            Todos 
                        </li>
                        <li id="geladeiras" onclick="exibir_categorias('geladeiras')" class="list-group-item d-flex justify-content-between align-items-center">
                            Geladeira 
                            <span class="badge badge-primary badge-pill"> 3</span>
                        </li>
                        <li id="fogoes" onclick="exibir_categorias('fogoes')" class="list-group-item d-flex justify-content-between align-items-center">
                            Fogão
                            <span class="badge badge-primary badge-pill"> 2</span>
                        </li>
                        <li id="microondas" onclick="exibir_categorias('microondas')" class="list-group-item d-flex justify-content-between align-items-center">
                            Microondas 
                            <span class="badge badge-primary badge-pill"> 3</span>
                        </li>
                        <li id="lavadoura" onclick="exibir_categorias('lavadoura')" class="list-group-item d-flex justify-content-between align-items-center">
                            Lavadoura
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                        <li id="lavaloucas" onclick="exibir_categorias('lavaloucas')" class="list-group-item d-flex justify-content-between align-items-center">
                            Lava-louça
                            <span class="badge badge-primary badge-pill">2</span>
                        </li>
                    </ul> 
                </div>
                </div>

        <div className="col-9">
            <div className="d-flex flex-wrap justify-content-around">  
                {this.props.arrayProd.map(
                    row=>
                <div className="prodcard" style={{width:"290px", height:"450px", display:'block'}} key={row.id_prod} id={row.nome_prod}>
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
