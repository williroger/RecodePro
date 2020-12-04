import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="bg-white text-dark" light expand="md">
          <NavbarBrand href="/">FULLSTACK ELETRO</NavbarBrand>
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
            <NavbarText>Carrinho</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  

export default Headers;
