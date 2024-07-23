import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';
import img1 from './imgs/m1.jpeg';

import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img4.jpeg";
import img4 from "./imgs/img18.jpeg";
import img5 from "./imgs/img8.jpeg";
import img6 from "./imgs/img24.jpeg";
import img7 from "./imgs/m1.jpeg";
import img8 from "./imgs/img5.jpeg";
import img9 from "./imgs/m4.jpeg";
import img10 from "./imgs/m5.jpeg";
import img11 from "./imgs/m6.jpeg";
import img12 from "./imgs/m7.jpeg";
import './styleShop.css'
const Store = () => {
  const { addToCart } = useShoppingCart();
  const products = [
    { id: 1, name: "TOM FORD", price: 1000.99, imgUrl: img1 },
    { id: 2, name: "VERSACE PARFUM", price: 1199, imgUrl: img2 },
    { id: 3, name: "CRISTAL NOIR", price: 200, imgUrl: img3 },
    { id: 4, name: "GLOSS DIOR", price: 140, imgUrl: img4 },
    { id: 5, name: "POUDRE", price: 14060, imgUrl: img5 },
    { id: 6, name: "GLOSS", price: 14000, imgUrl: img6 },
    { id: 7, name: "ROUGE A LEVRE", price: 800, imgUrl: img7 },
    { id: 8, name: "HIGHLIGHTER", price: 190, imgUrl: img8 },
    { id: 9, name: "FLULESS", price: 980, imgUrl: img9 },
    { id: 10, name: "AIR", price: 150, imgUrl: img10 },
    { id: 11, name: "POUDRE", price: 950, imgUrl: img11 },
    { id: 12, name: "PACK", price: 800, imgUrl: img12 },
  ];

  return (
    <div className="d-flex flex-wrap ml-10 mt-11">
      {products.map((product) => (
        <Card key={product.id} className="m-3 card-custom" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imgUrl} className="fixed-size-image" />
          <Card.Body>
            <Card.Title className="card-title-custom">{product.name}</Card.Title>
            <Card.Text className="card-text-custom">${product.price}</Card.Text>
            <Button variant="primary" className="button-custom " onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Store;
