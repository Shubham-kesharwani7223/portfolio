import React from 'react'
import { Typography } from '@mui/material';
import {Link} from "react-router-dom";
import {BsGithub, BsYoutube, BsLinkedin} from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div>
            <Typography variant='h5'>About Me</Typography>
            <Typography>
                Hey, I’m Shubham Kesharwani, an aspiring Java Developer 
                with experience in MERN Stack development. 
                I enjoy building scalable, responsive, and user-focused web applications while 
                continuously improving my problem-solving and software development skills.
            </Typography>

            <Link to="/contact" className='footerContactBtn'>
                <Typography>Contact Us</Typography>
            </Link>
        </div>
        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href='http://www.youtube.com/@The_Learner7223' target='black'>
               <BsYoutube />
            </a>

            <a href='https://www.linkedin.com/in/shubham-kesharwani7223/' target='black'>
               <BsLinkedin />
            </a>

            <a href='https://github.com/Shubham-kesharwani7223' target='black'>
               <BsGithub />
            </a>

            <a href='https://leetcode.com/u/shubham7223/' target='black'>
               <SiLeetcode />
            </a>
        </div>
    </div>
  )
}

export default Footer