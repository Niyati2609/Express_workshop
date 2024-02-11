import React from 'react'
import "../styles/Contact.css"
import bgimg from "../assets/pizzaLeft.jpg"
function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide' style={{ backgroundImage: `url(${bgimg})` }}> </div>
            <div className='rightSide'>
                <form>
                    <label htmlFor='name'>FUll NAME</label>
                    <input id='name' placeholder='Enter Name' type='text' />
                    <label htmlFor='email'>Email</label>
                    <input id='email' placeholder='Enter Email' type='email' />
                    <label htmlFor='Message'>Message</label>
                    <textarea rows="6" id='Message' placeholder='Enter message' required ></textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact