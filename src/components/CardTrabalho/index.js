import React, { useState } from "react";
import "./styles.css";
import Tag from "./Tag";
import imgDefault from "../../assets/imgs/ImgCard_Muu-Default.jpg";
import imgHover from "../../assets/imgs/ImgCard_Muu-Hoover.jpg";
import btnDefault from "../../assets/imgs/VisualizarButton-Default.svg";
import btnHover from "../../assets/imgs/VisualizarButton-Hoover.svg";
import Estatistica from "./Estatistica"; // Importando o novo componente

export default function CardTrabalho() {
    const [isHovered, setIsHovered] = useState(false);
    const tags = ["UX/UI", "Figma", "Marketplace", "Startup", "Product Design", "Mobile"];

    return (
        <div 
            className="card-trabalho"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Lado Esquerdo */}
            <div className="card-info">
                <h2 className="tituloCard">Projeto Muu</h2>
                <p className="descricao">
                    Ecosistema de<br/>
                    rastreabilidade<br/>
                    para o Mercado Agro
                </p>

                {/* Tags */}
                <div className="tag-container">
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <Tag text={tag} />
                            {/* Só exibe a elipse se não for a última tag */}
                            {index < tags.length - 1 && <div className="elipse"></div>}
                        </React.Fragment>
                    ))}
                </div>


                {/* Linha */}
                <div className="linhaCard"></div>

                {/* Estatísticas */}
                <div className="estatisticas">
                    <Estatistica numero="9" texto="Projetos" />
                    <Estatistica numero="1,5" texto="Anos de estágio" />
                    <Estatistica numero="∞" texto="Experiência agregada" />
                </div>

                {/* Botão Visualizar */}
                <img 
                    src={isHovered ? btnHover : btnDefault} 
                    alt="Visualizar Projeto" 
                    className="botao-visualizar"
                />
            </div>

            {/* Lado Direito - Imagem */}
            <div className="imagem-container">
                <img 
                    src={isHovered ? imgHover : imgDefault} 
                    alt="Imagem do trabalho" 
                    className="card-imagem"
                />
            </div>
        </div>
    );
}
