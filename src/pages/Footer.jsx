import React from 'react'
import { NavLink } from 'react-router-dom';
import "./assets/styles/footer.css"

function Footer() {
  return (
    <div>
      <div className="footer6">
      <div className="container">
        <div className="address">
          <div className="title">Phone</div>
          <div className="line"></div>
          <div className="content">+91-900000000000</div>
          <div className="title">EMAIL</div>
          <div className="line"></div>
          <h2 className="content">info@rozone</h2>
          <div className="title">Address</div>
          <div className="line"></div>
          <h2 className="content">#737C 1st Floor 1st Cross, 3rd Stage, 4th Block Basaveshwara Nagar Bengaluru-560079</h2>
        </div>
      <div className="p2">
          <div className="title">QUICKLINKS</div>
          <div className="line"></div>

          <ul className="navbar-nav">
                          <li className="navbar-item">
                              <NavLink to={`/`}  className="nav-link">Home</NavLink>
                          </li>
                          <li className="navbar-item">
                              <NavLink to={`/About`} className="nav-link"> About us</NavLink>
                          </li>
                          <li className="navbar-item">
                              <NavLink to={`/Services`} className="nav-link">Services</NavLink>
                          </li>
                          <li className="navbar-item">
                              <NavLink to={`/Product`} className="nav-link">Products</NavLink>
                          </li>
                          <li className="navbar-item">
                              <NavLink to={`/Technologies`} className="nav-link">Technologies </NavLink>
                          </li>
            
                      </ul>
        </div>
       
      </div>
       {/* <div className="d-md-flex justify-content-between mt-5"><div class="footer-cr"> All rights reserved. © Be Practical 2022      </div>
       <div class="footer-cr" ><i class="fab fa-square-facebook mr-2"></i> <i class="fab fa-square-twitter mr-2"></i> <i class="fas fa-envelope mr-2"></i> <i class="fab fa-square-youtube mr-2"></i> 
       <i class="fab fa-linkedin mr-2"></i> <i class="fab fa-square-whatsapp mr-2"></i>
        <i class="fab fa-square-instagram mr-2"></i></div></div> */}
      
      <div className="foot-logos">
        <div className="footer-cr"> All rights reserved. © Be Practical 2022</div>
      <div className="f">
        
        <i className="fab fa-square-facebook mr-2"></i> 
         <i className="fab fa-square-twitter mr-2"></i>
         <i className="fas fa-envelope mr-2"></i>
          <i className="fab fa-square-youtube mr-2"></i> 
          <i classname="fab fa-linkedin mr-2"></i> 
          <i className="fab fa-square-whatsapp mr-2"></i>
         <i className="fab fa-square-instagram mr-2"></i>

        
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer