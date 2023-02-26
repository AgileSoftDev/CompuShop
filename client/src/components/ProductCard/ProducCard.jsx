import React from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ imgSrc }) => {
   return (
    < Card className="p-0 overflow-hidden h-100 shadow"> 
        <div className=" overflow-hidden roudend p-0 bg-light">
            <Card.Img variant="top" src={imgSrc} /> 
        </div>
    </Card>
   );
};

export default ProductCard;