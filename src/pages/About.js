import React from 'react'
import bg from "../assets/About.jpeg"
import "../styles/About.css"

function About() {
    return (
        <div className='About' style={{ backgroundImage: `url(${bg})` }}>
            <div className='Text'>
                <h1>About US</h1>
                <p>At DC Pizzeria, we believe in the power of tradition and innovation, combining time-tested recipes with fresh, locally sourced ingredients. Each pizza is carefully crafted by our skilled artisans, who pour their heart and soul into every slice. We take pride in the art of pizza-making, ensuring that every bite is a burst of flavor that leaves you craving for more.</p>
            </div>

        </div>
    )
}

export default About