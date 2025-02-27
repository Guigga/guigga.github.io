import React from "react";
import Header from "../../components/Header";
import Motivacional from "../../components/Motivacional";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Sobre() {
    return (
        <div className="sobre-page">
            <Header />

            <Motivacional />

            <Footer />
        </div>
    );
}
