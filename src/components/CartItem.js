import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CartItem({ cartItem }) {
    const [pizzaDetails, setPizzaDetails] = useState(null);

    const handleIncreaseQuantity = async () => {
        try {
            const updatedQuantity = cartItem.quantity + 1;
            const response = await axios.put(`http://localhost:5000/cart/updateCartItemQuantity/${cartItem._id}`, { quantity: updatedQuantity });
            console.log(response.data);
        } catch (error) {
            console.error('Error increasing quantity:', error);
        }
    };

    const handleDecreaseQuantity = async () => {
        try {
            if (cartItem.quantity > 1) {
                const updatedQuantity = cartItem.quantity - 1;
                const response = await axios.put(`http://localhost:5000/cart/updateCartItemQuantity/${cartItem._id}`, { quantity: updatedQuantity });
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error decreasing quantity:', error);
        }
    };

    const handleDeleteFromCart = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/cart/deleteFromCart/${cartItem._id}`);
            console.log(response.data);
        } catch (error) {
            console.error('Error deleting item from cart:', error);
        }
    };

    useEffect(() => {
        fetchPizzaDetails();
    }, []);

    const fetchPizzaDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/pizza/${cartItem.pizza}`);
            console.log('Pizza details:', response.data);
            setPizzaDetails(response.data);
        } catch (error) {
            console.error('Error fetching pizza details:', error);
        }
    };

    return (
        <div className='menuItem'>
            {pizzaDetails && (
                <>
                <div style={{ backgroundImage: `url(${pizzaDetails.image})` }}></div>
                    <h1>{pizzaDetails.name}</h1>
                    <p>${pizzaDetails.price}</p>
                    <p>Quantity: {cartItem.quantity}</p>

                    <div className="quantityControl" style={{ display: 'inline' }}>
                        <button onClick={handleDecreaseQuantity}>-</button>
                        <button onClick={handleIncreaseQuantity}>+</button>
                        <button onClick={handleDeleteFromCart} style={{marginLeft: 200 }}>Delete from Cart</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartItem;
