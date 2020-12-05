import React from 'react';
import pagamento from '../pages/imagens/pagamento.png';

const Footer = (props) => {
  return (
<div className="footer bg-dark">
  <br></br>
  <p><b>Formas de Pagamento</b></p>
  <img height="25px" src={pagamento}/>
  <p></p>
  <p>© Recode Pro - Willi Roger - <a href="http://localhost/react-php/src/dashboard/">Area Administração - Temporário</a> </p>

</div>
  );
}

export default Footer;