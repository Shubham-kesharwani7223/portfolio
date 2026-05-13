import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from "../../Images/logo1.png";
import {FaUserAlt} from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar 
    navColor1="white"
    navColor2="hsl(218, 53%, 10%)"
    burgerColor="hsl(0, 1%, 63%)"
    logo={logo}
    logoWidth="100px"
    logoHoverColor="hsl(265, 63%, 8%)"
    nav2justifyContent="space-around"
    nav3justifyContent="space-around"
    link1Text="Home"
    link2Text="About"
    link3Text="Projects"
    link4Text="Contact"
    link1Url="/"
    link2Url="/about"
    link3Url="/projects"
    link4Url="/contact"
    link1ColorHover="white"
    link1Color="hsl(253, 23%, 92%)"
    link1Size="1.Srem"
    link1Padding="3vmax"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
    profileIconColor="hsl(253, 23%, 92%)"
    profileIconColorHover="white"
    />
  )
}

export default Header;