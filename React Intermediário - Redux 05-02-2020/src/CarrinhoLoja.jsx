import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function Carrinho() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.filter(item =>{
    return item.qty > 0;
  }));

    const totalPreco = useSelector(state => state.cart.reduce((acc,cur)=>
        acc+ (cur.preco *cur.qty)
      ,0)

    );

    const totalQt = useSelector(state =>
       state.cart.reduce((acc, cur) => acc + cur.qty, 0)
    );

    return (
      <div style={painelEstilo}>
        <h2>Carrinho ({totalQt})</h2>
        


      {cart.map((item) => (
      <ListGroup variant="flush" className="text-center">
        <ListGroup.Item key={item.id}>
          <Container>
            <Row>
              <Col><h5>{item.nome}</h5></Col>
              <Col xs lg="2"><h5>{item.preco.toFixed(2)}</h5></Col>
              <Col>

                <Button onClick={() => dispatch({ type: 'REMOVE_CARRINHO', id: item.id })} ><strong> - </strong></Button> 

                <Button variant="success" disabled>{item.qty}</Button>

                <Button onClick={() => dispatch({ type: 'ADD_CARRINHO', id: item.id })} ><strong> + </strong></Button> 

              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      </ListGroup>
      ))}
        <ListGroup.Item>
          <Row>

          <Col className="align-middle">
            <Button 
            variant="light" 
            onClick={()=> dispatch({type: "CLEAR_CARRINHO"})}
            >
              Limpar Carrinho
            </Button>
          </Col>

          <Col className="text-right align-middle">
            <h4>Total preço: ${totalPreco.toFixed(2)}</h4>
          </Col>
          </Row>
          
        </ListGroup.Item>
      
      </div>
      
    );
  }
  
  const painelEstilo = {
      padding: '10px',
      // height: '100vh',
      width: '40vw',
      background: '#5cb85c'
  }