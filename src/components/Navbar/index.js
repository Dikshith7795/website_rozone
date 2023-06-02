// import React from 'react';
// //import { NavLink, Router } from "react-router-dom";
// import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavElements"


// function Navbar() 
//  {
//   return (
//     <>
//     <Nav>
//     <NavLink to="/">
//         <h1>logos</h1>   
//     </NavLink> 
//     <Bars/>
//     <NavMenu>
//     <NavLink to="/home" activeStyle>
//         Home    
//     </NavLink> 
//     <NavLink to="/products" activeStyle>
//         Products    
//     </NavLink>   
//     <NavLink to="/services" activeStyle>
//         Services  
//     </NavLink>  
//     <NavLink to="/technologies" activeStyle>
//         Technology   
//     </NavLink> 
//     <NavLink to="/about" activeStyle>
//         About us  
//     </NavLink>
//     <NavLink to="/contactus" activeStyle>
//         Contact us 
//     </NavLink>
//     </NavMenu>
//     <NavBtn>
//         <NavBtnLink to="/signin"> Sign in </NavBtnLink>
//     </NavBtn>
    
//     </Nav>
     
//     </>
//   )
// }

// export default Navbar
import { NavLink } from "react-router-dom";
import React , { useState} from "react"
import "./navstyle.css"
import logo from "../assets/images/logo.png"
import {
    FaFacebookSquare, FaYoutubeSquare,
} from "react-icons/fa"
//import { ToastContainer, toast } from 'react-toastify'functi

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return ( 
        <>
        <nav>
        
         <img  className="logo" src={logo} alt="logo"/>
      
         <div className="navbar">
            <ul  className= "" >
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="Technologies.html">Technologies</a></li>
                <li><a href="about.html">About us</a></li>
                <li><a href="contact.html">Contact us</a></li>
              
            </ul>
        </div>
        <div id="mobile">
            <i className= "fas fa-bars" href="#" onClick={() => { setIsNavExpanded (!isNavExpanded)}}>
            </i>
        </div>
        <div
        className={
          isNavExpanded ? "navbar expanded" : "navbar"
        }
      > </div>
        </nav>
     
        
        </>
        
        
    )
}
export default Navbar;