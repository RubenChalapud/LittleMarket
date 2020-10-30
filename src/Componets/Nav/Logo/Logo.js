import React  from "react";
import Logo from "./logo.png";
import "./Logo.css"

function LogoLittleMarket() {
    return(
        <div className="o-container-logo">
            <img src={Logo} alt= "Little Market" className="o-img-logo"></img>
        </div>

    );
}
export default LogoLittleMarket;