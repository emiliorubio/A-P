import React, {useState} from "react";
import "../navbar/navbar.css"

function Navbar () {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggle");

    
    const navToggle = () => {
            active === 'nav_menu'
                ? setActive("nav_menu nav_active")
                : setActive("nav_menu");
    
            // TogglerIcon

            toggleIcon === "nav_toggler"
            ? setToggleIcon("nav_toggler toggle")
            : setToggleIcon("nav_toggler");
    };

    return (
        <nav className="nav">
            <a href="#" className="nav_brand"> A|P</a>
            <ul className={active}>
                <li className="nav_item"></li><a href="" className="nav_link">Home</a>
                <li className="nav_item"></li><a href="" className="nav_link">Servicio</a>
                <li className="nav_item"></li><a href="" className="nav_link">Nosotros</a>
                <li className="nav_item"></li><a href="" className="nav_link">Tienda</a>
                <li className="nav_item"></li><a href="" className="nav_link">Contacto</a>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>
        </nav>

    )
}

export default Navbar;