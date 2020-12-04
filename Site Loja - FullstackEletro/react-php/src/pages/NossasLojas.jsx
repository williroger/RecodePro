import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NossasLojas = (props) => {
  return (
    <div>
      <Card className="container">
        <CardBody>
          <CardTitle tag="h5">Belém</CardTitle>
          <CardText>Avenida Presidente Tal, 3º andar, Centro</CardText>
          <Button color="danger">(91) 1234-5678</Button>
        </CardBody>
      </Card>
      <Card className="container">
        <CardBody>
          <CardTitle tag="h5">Belém</CardTitle>
          <CardText>Avenida Presidente Tal, 3º andar, Centro</CardText>
          <Button color="danger">(91) 1234-5678</Button>
        </CardBody>
      </Card>
      <Card className="container">
        <CardBody>
          <CardTitle tag="h5">Belém</CardTitle>
          <CardText>Avenida Presidente Tal, 3º andar, Centro</CardText>
          <Button color="danger">(91) 1234-5678</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NossasLojas;