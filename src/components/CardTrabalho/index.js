import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Tag from "./Tag";
import Estatistica from "./Estatistica";
import BotaoAcao from "../Botoes/BotaoAcao";

// Imagens para desktop
import imgDefault from "../../assets/imgs/ImgCard_Muu-Default.jpg";
import imgHover from "../../assets/imgs/ImgCard_Muu-Hoover.jpg";

// Imagens para mobile
import imgMobileDefault from "../../assets/imgs/ImgCardMobile_Muu-Default.jpg";
import imgMobileHover from "../../assets/imgs/ImgCardMobile_Muu-Hoover.jpg";

// Botão "Visualizar"
import btnDefault from "../../assets/imgs/VisualizarButton-Default.svg";
import btnHover from "../../assets/imgs/VisualizarButton-Hoover.svg";

export default function CardTrabalho() {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const imgSrc = isHovered ? (isMobile ? imgMobileHover : imgHover) : (isMobile ? imgMobileDefault : imgDefault);

    const tags = ["UX/UI", "Figma", "Marketplace", "Startup", "Product Design", "Mobile"];

    const handleClick = () => {
        navigate("/certificacao-biometrica");
    };

    return (
        <div 
            className="card-trabalho"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer" }}
        >
            <div className="card-info">
                <h2 className="tituloCard">Mercado Agro</h2>
                <p className="descricao">
                    Ecossistema de rastreabilidade para o Mercado Agro
                </p>

                <div className="tag-container">
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <Tag text={tag} />
                            {index < tags.length - 1 && <div className="elipse"></div>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="linhaCard"></div>

                <div className="estatisticas">
                    <Estatistica numero="9" texto="Projetos" />
                    <Estatistica numero="1,5" texto="Anos de estágio" />
                    <Estatistica numero="∞" texto="Experiência agregada" />
                </div>

                {/* Novo botão usando o componente BotaoAcao */}
                <BotaoAcao 
                    onClick={handleClick} 
                    texto="Visualizar"
                    imgDefault={btnDefault} 
                    imgHover={btnHover} 
                />
            </div>

            <div className="imagem-container">
                <img 
                    src={imgSrc} 
                    alt="Imagem do trabalho" 
                    className="card-imagem"
                />
            </div>
        </div>
    );
}
