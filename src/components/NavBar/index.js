import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Adiciona useLocation
import linkedInDefault from "../../assets/imgs/LinkedIn-Default.svg";
import linkedInHover from "../../assets/imgs/LinkedIn-Hoover.svg";
import menuIcon from "../../assets/imgs/Menu.svg";
import closeIcon from "../../assets/imgs/Close.svg";
import "./styles.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const location = useLocation(); // Pega a localização atual da página

    // Função para verificar se a página está ativa
    const getNavItemClass = (path) => {
        return location.pathname === path ? 'active' : ''; // Aplica a classe active se a página for a mesma
    };

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
                        <li>
                            <Link 
                                to="/" 
                                className={getNavItemClass('/')} 
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/artes" 
                                className={`desabilitado ${getNavItemClass('/artes')}`} // Adiciona a classe desabilitado
                                onClick={() => setIsOpen(false)}
                            >
                                Artes
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/sobre" 
                                className={`desabilitado ${getNavItemClass('/sobre')}`} // Adiciona a classe desabilitado
                                onClick={() => setIsOpen(false)}
                            >
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contato" 
                                className={getNavItemClass('/contato')} 
                                onClick={() => setIsOpen(false)}
                            >
                                Contato
                            </Link>
                        </li>
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
                    <li>
                        <Link 
                            to="/" 
                            className={getNavItemClass('/')} 
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/artes" 
                            className={`desabilitado ${getNavItemClass('/artes')}`} // Adiciona a classe desabilitado
                        >
                            Artes
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/sobre" 
                            className={`desabilitado ${getNavItemClass('/sobre')}`} // Adiciona a classe desabilitado
                        >
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contato" 
                            className={getNavItemClass('/contato')} 
                        >
                            Contato
                        </Link>
                    </li>
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
