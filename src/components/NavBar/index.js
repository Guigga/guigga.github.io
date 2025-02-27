import React, { useState } from "react";
import linkedInDefault from "../../assets/imgs/LinkedIn-Default.svg";
import linkedInHover from "../../assets/imgs/LinkedIn-Hoover.svg";
import menuIcon from "../../assets/imgs/Menu.svg";
import closeIcon from "../../assets/imgs/Close.svg";
import "./styles.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <>
            {/* Ícone do menu - aparece apenas no mobile */}
            <img 
                src={menuIcon} 
                alt="Menu" 
                className="menu-icon" 
                onClick={() => setIsOpen(true)}
            />

            {/* Menu lateral no mobile */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <button className="close-menu" onClick={() => setIsOpen(false)}>
                    <img src={closeIcon} alt="Fechar menu" />
                </button>

                <nav className="nav-bar-mobile">
                    <ul>
                        <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="/artes" onClick={() => setIsOpen(false)}>Artes</a></li>
                        <li><a href="/sobre" onClick={() => setIsOpen(false)}>Sobre</a></li>
                        <li><a href="/contato" onClick={() => setIsOpen(false)}>Contato</a></li>
                    </ul>
                </nav>

                <a 
                    href="https://www.linkedin.com/in/gcarmo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="menu-link"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img src={hover ? linkedInHover : linkedInDefault} alt="LinkedIn" />
                </a>
            </div>

            {/* Menu desktop normal */}
            <nav className="nav-bar-desktop">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/artes">Artes</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contato">Contato</a></li>
                </ul>
                <a 
                    href="https://www.linkedin.com/in/gcarmo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <img src={hover ? linkedInHover : linkedInDefault} alt="LinkedIn" />
                </a>
            </nav>
        </>
    );
};

export default NavBar;
