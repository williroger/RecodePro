import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Container, Row, Col, ListGroup, Accordion, Card } from 'react-bootstrap';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Contato from './Contato';

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
{/* CARRINHO */}
      <Accordion className="mb-4">
        <Card>
          <Card.Header className="d-flex justify-content-end">
            <Accordion.Toggle as={Button} variant="outline-success" eventKey="1">
            Carrinho ({totalQt}) <FontAwesomeIcon icon={faShoppingCart} />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              
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

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
{/* CONTATO */}         
      <Accordion>
        <Card>
          <Card.Header className="d-flex justify-content-center">
            <Accordion.Toggle as={Button} variant="success" eventKey="0">
              Enviar Uma Mensagem
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            <Contato />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      </div>
      
    );
  }
  
  const painelEstilo = {
      padding: '10px',
      // height: '100vh',
      width: '55vw',
      background: '#5cb85c'
  }