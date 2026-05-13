import React from 'react';
import "./About.css";
import { Typography } from '@mui/material';
import sk from "./sk.jpeg";

const About = () => {
    return <div className='about'>
        <div className="aboutContainer">
            <Typography>Turning Ideas into Scalable Web Applications</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img 
                   src={sk} 
                   alt="Shubham" 
                   className='aboutAvatar'
                />
                <Typography 
                   variant='h4'
                   style={{margin: "1vmax 0", color: "black"}}
                >
                    Shubham Kesharwani
                </Typography>

                <Typography>I am a Software Engineer</Typography>

                <Typography
                   style={{margin: "1vmax 0"}}
                >
                    Full Stack Developer
                </Typography>
            </div>

            <div>
                <Typography 
                style={{
                    wordSpacing: "3px",
                    lineHeight: "30px",
                    letterSpacing: "2px",
                    textAlign: "left",
                }}>
                    Passionate and aspiring Java Developer with knowledge of 
                    Data Structures, OOPs, DBMS, and backend development. 
                    Along with Java, I also have hands-on experience in MERN Stack development 
                    and have built full-stack web applications using React.js, Node.js, Express.js, and MongoDB. 
                    Currently, I am focusing on improving my Java and problem-solving skills while building 
                    real-world projects to strengthen my software development experience.
                </Typography>
            </div>
        </div>
    </div>
};

export default About;