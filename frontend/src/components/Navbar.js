import "./Navbar.css";
import { useSelector } from "react-redux";
import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


const Navbary = ({ click }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return ( <div>
    <Navbar className="nav" expand="md">
      <NavbarBrand
        style={{
          backgroundImage: "linear-gradient(#190b6c, #01fd66, #3200ff)",
          backgroundClip: "text",
          backgroundSize: "100%",
          webkitBackgroundClip: "text",
          mozBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          mozTextFillColor: "transparent",
          paddingLeft:"1%"
        }}
      >
        <b style={{fontSize :"30px"}}>MERN E-commerce App</b>
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar style={{ alignItems: "baseline" }}>
          <NavItem>
            <NavLink href="/cart" className="navbarlink fas fa-shopping-cart">
              Cart
              <span className="span" style={{paddingLeft:"5%" , color : "gold" , backgroundColor:"red" , float:"center", padding:"4px"}}>{getCartCount()}</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="navbarlink">
              Shop
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
 
  );
};

export default Navbary;
