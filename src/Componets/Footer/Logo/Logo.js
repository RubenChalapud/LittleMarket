import React from "react";
import "./Logo.css";
import Logo from "../Logo/logo.png";

function LogoFooter(){
    return(
        <div className="o-container-logo"> 
        <img src={Logo} alt="Little Market" className="o-img-logo"/>
        </div>
    );

}
export default LogoFooter;