import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';

const Cart = ({ isOpen, onHide }) => {
  const { state, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();
  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Modal show={isOpen} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {state.items.map((item) => (
              <div key={item.id} className="d-flex align-items-center mb-3">
                <img src={item.imgUrl} alt={item.name} width={50} height={50} className="mr-3" />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <Button variant="" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="" size="sm" onClick={() => increaseQuantity(item.id)}>+</Button>
                  </div>
                </div>
                <Button 
  variant="" 
  onClick={() => removeFromCart(item.id)} 
  className='rounded-2xl text-xs p-2 bg-pink-800 text-white hover:bg-pink-800 focus:bg-pink-800'
>
  Remove
</Button>

              </div>
            ))}
            <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer> 
        <Button variant="" onClick={onHide} className='rounded-3xl bg-white text-xs'>Close</Button>
        <Button variant="" onClick={() => alert('Proceed to Checkout')} className='rounded-3xl bg-white text-pink-800 text-xs'>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
