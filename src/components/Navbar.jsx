import React from "react";
import "./Style.css"
import { FaGlobe } from "react-icons/fa";
import { FcElectroDevices } from "react-icons/fc";
const Navbar=()=>{
    return(
        <>
        

        <nav className="main_nav">
        
        <div className="nav1">
        <FcElectroDevices style={{fontSize:"40px" }}/>
        chat2fly
        </div>

        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Packages</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </div>
     
      <div className="lan">
       <div><FaGlobe/> English</div>
       <div>Agent Profile</div>
      </div>
        </nav>










        </>
    )
}
export default Navbar;