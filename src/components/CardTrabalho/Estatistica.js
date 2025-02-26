import React from "react";
import "./styles.css";

export default function Estatistica({ numero, texto }) {
    return (
        <div className="estatistica">
            <span className="numero">{numero}</span>
            <span className="texto">{texto}</span>
        </div>
    );
}
