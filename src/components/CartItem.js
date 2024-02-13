import axios from 'axios';
import React, { useEffect, useState } from 'react';

function CartItem({ cartItem }) {
    const [pizzaDetails, setPizzaDetails] = useState(null);
    

    const handleDeleteFromCart = async () => {
        try {
            //debugger;
            const response = await axios.delete(`http://localhost:5000/cart/deleteFromCart/${cartItem._id}`);
            console.log(response.data);
            window.location.reload();
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
                        
                        <button onClick={handleDeleteFromCart} style={{marginLeft: 200 }}>Delete from Cart</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartItem;
