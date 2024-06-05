import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Store from "./Store";
import Cart from "./Cart";
import { useShoppingCart } from "./ShoppingCartContext";
import './shop.css';

const ShopPageContent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { state } = useShoppingCart(); 

  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container className="mb-4">
      <div className="d-flex align-items-center mb-2">
        <button onClick={() => setCartOpen(true)} className="btn-open">Open Cart</button>
        {totalItems > 0 && (
          <span className="badge">{totalItems}</span>
        )}
      </div>
      <Store />
      <Cart isOpen={cartOpen} onHide={() => setCartOpen(false)} />
    </Container>
  );
};

export default ShopPageContent;
