import React from 'react';
import './App.css';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Footer from "./pages/Footer"
import Contactus from "./pages/Contactus"
import Technologies from './pages/Technologies';
import Restapi1 from './pages/Restapi1';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
//import "./styles.css"
function App() {
  return (
    <BrowserRouter>
    <Menu/>
   

    <Routes>
      <Route path={`/`} element={<Home/>}/>
      <Route path={`/Services`} element={<Services/>}/>
      <Route path={`/product`} element={<Product/>}/>
      <Route path={`/contactus`} element={<Contactus/>}/>
      <Route path={`/Services`} element={<Services/>}/>
      <Route path={`/Technologies`} element={<Technologies/>}/>
      <Route path={`/Restapi1`} element={<Restapi1/>}/>
  
     
    </Routes>
  
    <Footer/>
  </BrowserRouter>
  
    
  );
}

export default App;
