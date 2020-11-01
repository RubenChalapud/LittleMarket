import React  from "react";
import Logo from "./Logo/Logo.js";
import Links from "./Links/Links.js";
import Info from "./Informacion/Info.js";
import "./Footer.css"


function Footer(){
    return(
        <div className="o-footer-container">
            <Logo></Logo>
            <Links></Links>
            <Info></Info>
        </div>
    );
}
export default Footer;