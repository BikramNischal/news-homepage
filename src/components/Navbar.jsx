import { useState } from "react";
import "../styles/NavbarStyles.css";


function Menu(props) {
    const changeState = () => {
        props.stateUpdate(!props.menuStatus);
    }

    if (props.menuStatus) {
        return (
            <div className="menu-overlay">
                <div className="menu">
                    <button className="menu-btn menu-close-btn" onClick={changeState} >
                        <img className="menu-img" 
                            src="/assets/images/icon-menu-close.svg"
                            alt="close button" />
                    </button>
                    <ul className="nav-list">
                        <li>Home</li>
                        <li>New</li>
                        <li>Popular</li>
                        <li>Trending</li>
                        <li>Categories</li>
                    </ul>
                </div>
            </div>
        );
    }
    else {
        return (
            <button className="menu-btn" onClick={changeState}>
                <img className="menu-img"
                    src="/assets/images/icon-menu.svg"
                    alt="menu button" />
            </button>
        );
    }
}


export default function Navbar(props) {
    if (props.screensize > 800) {
        return (
            <div className="nav-bar">
                <img className="navbar-logo" src="/assets/images/logo.svg" width="50px" alt="company logo" />
                <ul className="nav-list">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        );
    }
    else {
        const [menuOpen, setMenuOpen] = useState(false);
        return (
            <div className="nav-bar">
                <img className="navbar-logo" src="/assets/images/logo.svg" width="50px" alt="company logo" />
                <Menu menuStatus={menuOpen} stateUpdate={setMenuOpen} />
            </div>
        );
    }
}
