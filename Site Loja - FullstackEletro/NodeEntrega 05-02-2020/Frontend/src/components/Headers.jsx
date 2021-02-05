import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,NavbarText} from 'reactstrap';
import shop from '../pages/imagens/car-shop.png';
import logo from '../pages/imagens/logo.png';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className="bg-red-2 justify-content-around mb-5" light expand="md">
          <NavbarBrand href="/"><img height="60px" src={logo} alt="Full Stak Eletro"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/produtos">Produtos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/nossaslojas">Nossas Lojas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato">Contato</NavLink>
              </NavItem>
            </Nav>
            <NavbarText><img width="50%" src={shop}/></NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  

export default Headers;
