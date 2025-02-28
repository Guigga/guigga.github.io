import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importação do Link
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
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li> {/* Alterado para Link */}
                        <li><Link to="/artes" onClick={() => setIsOpen(false)}>Artes</Link></li> {/* Alterado para Link */}
                        <li><Link to="/sobre" onClick={() => setIsOpen(false)}>Sobre</Link></li> {/* Alterado para Link */}
                        <li><Link to="/contato" onClick={() => setIsOpen(false)}>Contato</Link></li> {/* Alterado para Link */}
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
                    <li><Link to="/">Home</Link></li> {/* Alterado para Link */}
                    <li><Link to="/artes">Artes</Link></li> {/* Alterado para Link */}
                    <li><Link to="/sobre">Sobre</Link></li> {/* Alterado para Link */}
                    <li><Link to="/contato">Contato</Link></li> {/* Alterado para Link */}
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
