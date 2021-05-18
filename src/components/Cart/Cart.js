import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;

    const totalTransferFee = cart.reduce((totalFee, player) => totalFee + player.transfer_fee, 0);
    const totalSalary = cart.reduce((totalSalary, player) => totalSalary + player.salary, 0);
    const totalBudget = totalSalary + totalTransferFee;

    return (
        <div className="cart">
            <h4 className="text-primary">Selected Player For The Club</h4>
            <h5 className="text-secondary">Total Selected Player: {cart.length} </h5>
            <h6 className="text-success">Selected Players Name: </h6>
            <ul>
                {cart.map(player => <li key={player.id}>{player.first_name + " " + player.last_name}</li>)}
            </ul>

            <p className="text-danger">Total Salary for the players: {totalSalary} Taka / Per Year </p>
            <p>Total Transfer Fee: {totalTransferFee} Taka </p>
            <p>Total Budget for 1 year: {totalBudget} Taka </p>

        </div>


    );
};

export default Cart;