import React  from "react";
import Logo from "./Logo/Logo.js";
import Links from "./Links/Links.js";
import Botones from "./Botones/Botones.js";
import "./Nav.css"

function Nav(){
    return(
        <div className="o-nav-container">
            <Logo></Logo>
            <Links></Links>
            <Botones></Botones>
        </div>
    );
}
export default Nav;