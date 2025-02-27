import React, { useState } from "react";
import Header from "../../components/Header";
import Motivacional from "../../components/Motivacional";
import Footer from "../../components/Footer";
import Tag from "../../components/CardTrabalho/Tag";
import TituloSessao from "../../components/TituloSessao";
import "./styles.css";
import diagrama from "../../assets/imgs/diagrama.png";
import figmaImage from "../../assets/imgs/figma.png";

// Imagens do Carrossel Desktop
import carrossel1 from "../../assets/carrossel/DesktopCarrossel-1.png";
import carrossel2 from "../../assets/carrossel/DesktopCarrossel-2.png";
import carrossel3 from "../../assets/carrossel/DesktopCarrossel-3.png";

// Imagens do Carrossel Mobile
import mobileCarrossel1 from "../../assets/carrossel/MobileCarrossel-1.png";
import mobileCarrossel2 from "../../assets/carrossel/MobileCarrossel-2.png";
import mobileCarrossel3 from "../../assets/carrossel/MobileCarrossel-3.png";
import mobileCarrossel4 from "../../assets/carrossel/MobileCarrossel-4.png";
import mobileCarrossel5 from "../../assets/carrossel/MobileCarrossel-5.png";

// Botões do Carrossel 
import botaoDireita from "../../assets/carrossel/botão-direita.svg";
import botaoEsquerda from "../../assets/carrossel/botão-esquerda.svg";

export default function CertificacaoBiometrica() {
    const tags = ["UX/UI", "Figma", "Marketplace", "Startup", "Product Design", "Mobile"];
    const imagensCarrosselDesktop = [carrossel1, carrossel2, carrossel3];
    const imagensCarrosselMobile = [mobileCarrossel1, mobileCarrossel2, mobileCarrossel3, mobileCarrossel4, mobileCarrossel5];
    
    const [indexAtualDesktop, setIndexAtualDesktop] = useState(0);
    const [indexAtualMobile, setIndexAtualMobile] = useState(0);

    const avancarImagemDesktop = () => {
        setIndexAtualDesktop((prevIndex) => (prevIndex + 1) % imagensCarrosselDesktop.length);
    };

    const voltarImagemDesktop = () => {
        setIndexAtualDesktop((prevIndex) =>
            prevIndex === 0 ? imagensCarrosselDesktop.length - 1 : prevIndex - 1
        );
    };

    const avancarImagemMobile = () => {
        setIndexAtualMobile((prevIndex) => (prevIndex + 1) % imagensCarrosselMobile.length);
    };

    const voltarImagemMobile = () => {
        setIndexAtualMobile((prevIndex) =>
            prevIndex === 0 ? imagensCarrosselMobile.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="certificacao-page">
            <Header />

            {/* Seção de Introdução */}
            <div className="certificacao-intro">
                <h1 className="titulo-certificacao">Certificação Biométrica</h1>
                <h2 className="subtitulo-certificacao">
                    Ecosistema de rastreabilidade para o Mercado Agro
                </h2>

                {/* Tags */}
                <div className="tag-container">
                    {tags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <Tag text={tag} />
                            {index < tags.length - 1 && <div className="elipse"></div>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Resumo */}
                <p className="resumo-certificacao">
                    Soluções tecnológicas para o mercado de bovinos: a certificação biométrica
                    assegura uma rastreabilidade eficiente na palma da sua mão.
                    Revolucionando desde a criação até a mesa do consumidor.
                </p>
            </div>

            <TituloSessao titulo="Marketplace" subtitulo="Mercado Genético" />

            {/* Imagem Fullscreen */}
            <div className="imagem-fullscreen">
                <img src={require("../../assets/imgs/laptopMuu.jpg")} alt="Laptop Muu" />
            </div>

            {/* Sessão de três colunas */}
            <div className="certificacao-info">
                <div className="coluna">
                    <h3 className="titulo-coluna">Equipe envolvida</h3>
                    <p className="item-coluna">1 Product Owner</p>
                    <p className="item-coluna">1 Product Designer</p>
                </div>
                <div className="coluna">
                    <h3 className="titulo-coluna">Minhas funções</h3>
                    <p className="item-coluna">Designer de Produto</p>
                    <p className="item-coluna">Experiência do Usuário</p>
                </div>
                <div className="coluna">
                    <h3 className="titulo-coluna">Ferramentas</h3>
                    <p className="item-coluna">Figma e Illustrator</p>
                    <p className="item-coluna">IA Generator Image</p>
                </div>
            </div>

            {/* Seções de Texto */}
            <div className="certificacao-secoes">
                <h2 className="titulo-secao">Visão Geral</h2>
                <p className="resumo-secao">
                    O projeto busca criar um ecossistema integrado à rastreabilidade bovina, 
                    com produtos que trazem soluções inovadoras que atendem ao produtor e o consumidor.
                </p>

                <h3 className="subtitulo-secao">Sobre o Mercado Genético</h3>
                <p className="descricao-secao">
                    O Mercado Genético é uma plataforma que faz parte do ecossistema integrado. Ele tem como objetivo trazer ao produtor uma ferramenta capaz de facilitar a compra de material genético e serviços relacionados em um só lugar, trazendo rastreabilidade e segurança em todos os produtos e etapas.
                </p>
                <img className="imagem-secao" src={diagrama} alt="Diagrama do Mercado Genético" />

                <h3 className="subtitulo-secao">Problema Inicial</h3>
                <p className="descricao-secao">
                    A rastreabilidade animal tradicionalmente depende de brincos e cortes, métodos invasivos que podem ser removidos ou adulterados, comprometendo a identificação e segurança contra fraudes e roubos.
                </p>

                <h3 className="subtitulo-secao">Solução</h3>
                <p className="descricao-secao">
                    A biometria do focinho permite a identificação precisa e inalterável do animal por meio da câmera do celular. Esse método elimina métodos invasivos e possibilita rastreamento seguro em qualquer lugar, a qualquer momento.
                </p>

                <h3 className="subtitulo-secao">Expansão do Ecossistema de Rastreabilidade</h3>
                <p className="descricao-secao">
                    Além da biometria, o projeto desenvolveu soluções para integrar a rastreabilidade ao setor agro, incluindo monitoramento de transporte, registro de manejo, mercado genético e controle de operações, garantindo mais segurança e transparência na cadeia produtiva.
                </p>

                <h3 className="subtitulo-secao">Minha Participação</h3>
                <p className="descricao-secao">
                    Atuei na criação de layouts e manutenção do Design System em diversos aplicativos web e mobile, garantindo coerência visual, padronização de componentes e otimização da experiência do usuário. Trabalhei na definição de espaçamentos, tipografia, iconografia e estrutura de layouts, assegurando que os projetos mantivessem uma identidade consistente e escalável. Além disso, colaborei na organização e delegação de tarefas pelo Jira, auxiliando no gerenciamento do fluxo de trabalho da equipe. Realizei testes de usabilidade e qualidade para identificar bugs e aprimorar pontos críticos da interface, garantindo uma experiência mais intuitiva e eficiente para os usuários.
                </p>
            </div>

            {/* Sessão de Figma */}
            <h2 className="titulo-secao">Ambiente no Figma</h2>
<p className="resumo-secao">
    A organização no Figma foi essencial para garantir a eficiência e a escalabilidade dos projetos. Estruturei as páginas, separando fluxos, protótipos e componentes de maneira estratégica para otimizar a navegação e a colaboração da equipe.
</p>

            {/* Imagem do Figma respeitando os paddings globais */}
            <div className="figma-container">
                <img className="imagem-figma" src={require("../../assets/imgs/figma.png")} alt="Ambiente no Figma" />
            </div>


            {/* Sessão de Designs */}
            <h2 className="titulo-secao">Designs</h2>
            <p className="resumo-secao">Nesta seção, apresento exemplos das telas desenvolvidas</p>

            <TituloSessao titulo="Mercado Genético" subtitulo="Desktop" />

            {/* Carrossel de Imagens Desktop */}
            <div className="carrossel-container">
                <button className="botao-carrossel esquerda" onClick={voltarImagemDesktop}>
                    <img src={botaoEsquerda} alt="Anterior" />
                </button>
                <img className="imagem-carrossel" src={imagensCarrosselDesktop[indexAtualDesktop]} alt={`Slide ${indexAtualDesktop + 1}`} />
                <button className="botao-carrossel direita" onClick={avancarImagemDesktop}>
                    <img src={botaoDireita} alt="Próximo" />
                </button>
            </div>

            <TituloSessao titulo="Marketplace" subtitulo="Mobile" />

            {/* Carrossel de Imagens Mobile */}
            <div className="carrossel-container">
                <button className="botao-carrossel esquerda" onClick={voltarImagemMobile}>
                    <img src={botaoEsquerda} alt="Anterior" />
                </button>
                <img className="imagem-carrossel" src={imagensCarrosselMobile[indexAtualMobile]} alt={`Slide ${indexAtualMobile + 1}`} />
                <button className="botao-carrossel direita" onClick={avancarImagemMobile}>
                    <img src={botaoDireita} alt="Próximo" />
                </button>
            </div>

            <Motivacional />
            <Footer />
        </div>
    );
}
