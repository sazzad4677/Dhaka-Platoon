import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import "./Shop.css"
import Players from '../../components/Players/Players'
import Cart from '../Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';



const Shop = (props) => {
    const [players, setPlayer] = useState([])
    useEffect(() => {
        setPlayer(fakeData);
    }, [])

    const [cart, setCart] = useState([]);
    const handelAddPlayer = (player) => {
        const samePlayer = cart.find(element => element.id === player.id)
        if (samePlayer) {
            alert("Already Selected")
        }
        else {
            const newCart = [...cart, player]
            setCart(newCart)
        }

    }

    return (
        <div className="players-container d-flex">
            <div className="player-list col-md-9">
                {
                    players.map(player => <Players player={player} key={player.id} handelAddPlayer={handelAddPlayer}> </Players>)
                }
            </div>
            <div className="cart col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;