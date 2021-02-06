import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Card } from 'react-bootstrap';

// import Uva from "./img/uva.png"

export default function Produtos() {

  const dispatch = useDispatch()
  const produtos = useSelector((state) => state.produtos);
  // console.log(produtos);

  return (
    <div style={painelEstilo}>
      <h2>PRODUTOS DA FEIRA</h2>
      {produtos.map(item => (
        // <div key={item.id}>
        //   <p>{item.nome}</p>
        //   <img src={item.img} alt="{item.nome}" />
        //   <p>R$ {item.preco.toFixed(2)}</p>
        //   <Button 
        //   variant="success" 
        //   onClick={()=> dispatch({type: 'ADD_CARRINHO', id: item.id })}>
        //   ADICIONAR AO CARRINHO
        //   </Button>
        // </div>

            <Card key={item.id} style={{ width: '40vw' }} className="m-3 text-center">
              <Card.Body>
                <img src={item.img} alt="{item.nome}" />
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text>
                R$ {item.preco.toFixed(2)}
                </Card.Text>
                <Button 
                variant="success" 
                onClick={()=> dispatch({type: 'ADD_CARRINHO', id: item.id })}>
                ADICIONAR AO CARRINHO
                </Button>
              </Card.Body>
            </Card>

      ))}
    </div>
  );
}

const painelEstilo = {
    padding: '10px',
    // height: '100vh',
    width: '60vw',
    background: '#b2dfdb',
}