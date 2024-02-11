import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <Twitter />
                < Facebook />
                <LinkedIn />


                <p> &copy; 2023 DhruvaChaudhari</p>

            </div>
        </div>
    )
}

export default Footer