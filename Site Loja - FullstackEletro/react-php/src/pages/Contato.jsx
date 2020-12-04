import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contato = (props) => {
    return (
      <Form className="container">
        <FormGroup>
          <Label for="exampleEmail">Nome</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Seu nome" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">E-mail</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Seu e-mail" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Escreva sua mensagem aqui</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="danger">Submit</Button>
      </Form>
    );
  }
  

export default Contato;