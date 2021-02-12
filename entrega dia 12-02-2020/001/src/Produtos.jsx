import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import ImgCard from './ImgCard';

// import Uva from "./img/uva.png"

export default function Produtos() {

  const dispatch = useDispatch()
  const produtos = useSelector((state) => state.produtos);
  // console.log(produtos);

  return (
    <div style={painelEstilo}>
      <h2>PRODUTOS DA FEIRA</h2>
      {produtos.map(item => (

            <Card key={item.id} style={{ width: '40vw' }} className="m-3 text-center">
              <Card.Body>
                <ImgCard />
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