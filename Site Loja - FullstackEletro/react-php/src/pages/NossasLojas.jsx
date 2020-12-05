import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import Belem from '../pages/imagens/belem.jpeg'
import Rio from '../pages/imagens/rio.jpeg'
import Sampa from '../pages/imagens/saopaulo.jpeg'

const NossasLojas = (props) => {
  return (
      <div className="container m-5">
            <div className="d-flex flex-wrap justify-content-around">
      <Card className="cardlojas">
        <CardBody>
        <CardImg top src={Belem}/>
          <CardTitle tag="h5">Belém</CardTitle>
          <CardText>Avenida Presidente Tal, 3º andar, Centro</CardText>
          <Button color="danger">(91) 1234-5678</Button>
        </CardBody>
      </Card>
      <Card className="cardlojas">
        <CardBody>
          <CardImg top src={Sampa}/>
          <CardTitle tag="h5">São Paulo</CardTitle>
          <CardText>Avenida Presidente Tal, 3º andar, Centro</CardText>
          <Button color="danger">(91) 1234-5678</Button>
        </CardBody>
      </Card>
      <Card className="cardlojas">
        <CardBody>
          <CardImg top src={Rio}/>
          <CardTitle tag="h5">Rio de Janeiro</CardTitle>
          <CardText>Avenida Presidente Tal, 3º andar, Centro</CardText>
          <Button color="danger">(91) 1234-5678</Button>
        </CardBody>
      </Card>
    </div>
    </div>
  );
};

export default NossasLojas;