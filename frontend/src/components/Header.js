import React from "react";
import {Link} from 'react-router-dom'; //it stopped refreshing navigate to the other pages
function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"style={{color:"red"}}>Hot Kitchen</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        
        <Link to="/add" className="nav-link">Add Emploee</Link>
      </li>
      <li className="nav-item">
      <Link to="/gets" className="nav-link">Salary</Link>
      </li>
      <li className="nav-item">
      <Link to="/QRcodeGenerator" className="nav-link">QR Code Generator</Link>
      </li>
      <li className="nav-item">
      <Link to="/WebCamScanner" className="nav-link">QR Scanner</Link>
      </li>
      <li className="nav-item">
      <Link to="/getss" className="nav-link">Attendance</Link>
      </li>
      
      
      
    </ul>
  </div>
</nav>
    )
}

export default Header;