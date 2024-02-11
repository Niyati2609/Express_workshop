import axios from 'axios'; // Import Axios
import React, { useEffect, useState } from 'react';
import menu_bg from "../assets/menu_bg.png";
import CartItem from '../components/CartItem';
import "../styles/Menu.css";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/cart/showcart');
            console.log('Response from server:', response.data);
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    return (
        <div className='menu' style={{ backgroundImage: `url(${menu_bg})` }}>
            <h1 className='menuTitle'>Your Cart</h1>
            <div className='menuList'>
                {cartItems.map((cartItem, index) => (
                    <CartItem key={index} cartItem={cartItem} />
                ))}
            </div>
        </div>
    );
}

export default Cart;
