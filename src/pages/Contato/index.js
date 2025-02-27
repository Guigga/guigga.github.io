import React from "react";
import Header from "../../components/Header";
import Motivacional from "../../components/Motivacional";
import Footer from "../../components/Footer";
import "./styles.css";

export default function Contato() {
    return (
        <div className="contato-page">
            <Header />

            <Motivacional />

            <Footer />
        </div>
    );
}
