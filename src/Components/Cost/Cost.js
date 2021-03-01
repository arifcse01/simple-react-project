import React from 'react';
import './Cost .css';

const Cost = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, cost) => total + cost.salary, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const cost = cart[i];
        total = total + cost.salary;        
    }    
    return (
        <div className="player-info">
            <h4>Total Cost: ${total}</h4>
            {
                cart.map(player => <li>{player.id}, {player.name}, ${player.salary}</li>)
            }
        </div>
    );
};

export default Cost;