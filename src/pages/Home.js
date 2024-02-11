import React from 'react'
import { Link } from 'react-router-dom';
import bgImg from '../assets/pizza.jpeg'

import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='headerContainer' >
                <h1>
                    DC Pizzeria

                </h1>
                <p>Straight from oven</p>
                <Link to="/menu">
                    <button>ORDER NOW!!</button>
                </Link>

            </div>

        </div>

    );
}

export default Home