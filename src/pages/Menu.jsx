

import { NavLink } from 'react-router-dom';
import logo from "./assets/images/logo.png"
import "./assets/styles/Menu.css"


function Menu() {
    return (
      <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-info">
              <div className="container">
                  <NavLink to={`/`} className="navbar-brand"><img  className="logo" src={logo} alt="logo"/></NavLink>
         
                  <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                      <span className="navbar-toggler-icon"></span>
                  </button>
  
                  <div className="collapse navbar-collapse" id='menu'>
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
                          <li className="navbar-item">
                              <NavLink to={`/Restapi1`} className="nav-link">Restapi</NavLink>
                          </li>
            
                      </ul>
                  </div>
              </div>
          </nav>
        
      </div>
    )
  }
  
  export default Menu
  
  