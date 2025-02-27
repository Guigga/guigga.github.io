// TituloSessao/index.js
import React from 'react';
import './styles.css'; // arquivo de estilo para o componente

const TituloSessao = ({ titulo, subtitulo }) => {
    // Verifica se o subtitulo contém "@" (indicando um email)
    const isEmail = typeof subtitulo === "string" && subtitulo.includes("@");

    return (
        <div className="titulo-sessao">
            <div className="linha"></div>
            <div className="texto-container">
                <h2 className="titulo">{titulo}</h2>
                {/* Aplica a classe "email" apenas se for um email */}
                <h3 className={`subtitulo ${isEmail ? "email" : ""}`}>{subtitulo}</h3>
            </div>
        </div>
    );
};

export default TituloSessao;
