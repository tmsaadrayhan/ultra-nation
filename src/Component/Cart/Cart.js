import React from 'react';
import "./Cart.css"
import Country from '../Country/Country';

const Cart = (props) => {
    const totalPopulation= props.cart.reduce((sum, country)=> sum+country.population, 0)
    return (
        <div>
            <h2>This is cart: {props.cart.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;