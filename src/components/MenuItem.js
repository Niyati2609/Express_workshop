import axios from 'axios';
import React from 'react';

function MenuItem({ id, image, name, price }) {
    const handleAddToCart = async (pizzaId) => {
        const quantity = 1; 

        try {
            const response = await axios.post('http://localhost:5000/cart/addToCart', {
                pizzaId,
                quantity
            });
            console.log(response.data);
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart. Please try again later.');
        }
    };

    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>${price}</p>
            <center><button onClick={() => handleAddToCart(id)}>Add to Cart</button></center>
        </div>
    );
}

export default MenuItem;
