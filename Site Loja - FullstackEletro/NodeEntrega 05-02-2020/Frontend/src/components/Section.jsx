import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Section = (props) => {
    return (
      <div class="container d-xl-flex align-items-xl-center">
        <div class="row m-3">
          <Jumbotron >
            <h1 className="display-3 m-1">Seja bem-vindo!</h1>
            <p className="lead">Em nossas lojas</p>
            <hr className="my-2" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble</p>
            <p className="lead mx-auto">
            <Button color="danger" href="/produtos">Comprar</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  };
  

export default Section;