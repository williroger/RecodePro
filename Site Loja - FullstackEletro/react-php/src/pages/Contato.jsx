import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

export default class Contato extends Component{

  constructor(props){
      super(props);
      this.onChangeNome = this.onChangeNome.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeMsg = this.onChangeMsg.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        nome: '',
        email: '',
        msg: ''
      }
    }

      onChangeNome(e){
        this.setState({
          nome: e.target.value
        });
      }
      onChangeEmail(e){
        this.setState({
          email: e.target.value
        });
      }
      onChangeMsg(e){
        this.setState({
          msg: e.target.value
        });
      }
  
      onSubmit(e){
      e.preventDefault();
  
      const obj = {
        nome: this.state.nome,
        email: this.state.email,
        msg: this.state.msg
      };

      axios.post('http://localhost/react-php/src/dashboard/contato.php', obj)
      .then(res => console.log(res.data));
      
      this.setState = ({
        nome: '',
        email: '',
        msg: ''
      })

      }

render() {
    return (
      <div className="container d-xl-flex p-5">
      <Form className="container align-items-xl-center p-5 rounded" id="body-section" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label className="text-white" for="Nome">Nome</Label>
          <Input type="nome" name="nome" id="nome" placeholder="Seu nome" 
          value={this.state.nome}
          onChange={this.onChangeNome}
          />
        </FormGroup>
        <FormGroup>
          <Label className="text-white" for="email">E-mail</Label>
          <Input type="email" name="email" id="email" placeholder="Seu e-mail" 
          value={this.state.email}
          onChange={this.onChangeEmail}
          />
        </FormGroup>
        <FormGroup>
          <Label className="text-white" for="msg">Sua Mensagem</Label>
          <Input type="textarea" name="msg" id="msg" placeholder="Digite aqui sua mensagem" 
          value={this.state.msg}
          onChange={this.onChangeMsg}
          />
        </FormGroup>
        <button type="submit" value="Enviado" class="btn btn-light mb-2 btn-lg btn-block" data-toggle="modal" data-target="#exampleModal">Enviar Mensagem</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Mensagem enviada!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Obrigado! Vamos ver sua mensagem!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Ok</button>
            </div>
          </div>
        </div>
      </div>
      </Form>
      </div>
    );
  }
}