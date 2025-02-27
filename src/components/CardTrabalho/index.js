import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Tag from "./Tag";
import Estatistica from "./Estatistica";

// Imagens para desktop
import imgDefault from "../../assets/imgs/ImgCard_Muu-Default.jpg";
import imgHover from "../../assets/imgs/ImgCard_Muu-Hoover.jpg";

// Imagens para mobile
import imgMobileDefault from "../../assets/imgs/ImgCardMobile_Muu-Default.jpg";
import imgMobileHover from "../../assets/imgs/ImgCardMobile_Muu-Hoover.jpg";

// Botões
import btnDefault from "../../assets/imgs/VisualizarButton-Default.svg";
import btnHover from "../../assets/imgs/VisualizarButton-Hoover.svg";

export default function CardTrabalho() {
    const navigate = useNavigate(); // Hook para navegação
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Função para verificar se a tela é mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Define a imagem correta com base no tamanho da tela
    const imgSrc = isHovered ? (isMobile ? imgMobileHover : imgHover) : (isMobile ? imgMobileDefault : imgDefault);

    const tags = ["UX/UI", "Figma", "Marketplace", "Startup", "Product Design", "Mobile"];

    // Função para navegar para a página desejada
    const handleClick = () => {
        navigate("/certificacao-biometrica");
    };

    return (
        <div 
            className="card-trabalho"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick} // Redireciona ao clicar
            style={{ cursor: "pointer" }} // Muda o cursor para indicar clicabilidade
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
                    src={imgSrc} 
                    alt="Imagem do trabalho" 
                    className="card-imagem"
                />
            </div>
        </div>
    );
}
