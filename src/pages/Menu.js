

import axios from 'axios'; // Import Axios
import React, { useEffect, useState } from 'react';
import menu_bg from "../assets/menu_bg.png";
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css";

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        // Use Axios for fetching data
        axios.get('http://localhost:5000/pizza/showPizza')
            .then(response => {
                console.log('Response from server:', response);
                return response.data; // Extract data from response
            })
            .then(data => {
                console.log('Data received from server:', data);
                setMenuItems(data);
            })
            .catch(error => console.error('Error fetching pizzas:', error));
    }, []);

    return (
        <div className='menu' style={{ backgroundImage: `url(${menu_bg})` }}>
            <h1 className='menuTitle'>
                Our Menu
            </h1>
            <div className='menuList'>
                {menuItems.map((menuItem, index) => (
                    <MenuItem key={index} image={menuItem.image} name={menuItem.name} price={menuItem.price} id={menuItem._id} />
                ))}
            </div>
        </div>
    );
}

export default Menu;
