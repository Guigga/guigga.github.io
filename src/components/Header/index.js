import React from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";
import "./styles.css";

export default function Header() {
    return (
        <header className="header">
            <a href="/" className="logo-link">
                <Logo />
            </a>
            <NavBar />
        </header>
    );
}
