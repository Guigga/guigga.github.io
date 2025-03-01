import React, { useState } from "react";
import Apresentacao from "../Apresentacao";
import perfilPessoa from "../../assets/imgs/PerfilPessoa.png";
import perfilDesigner from "../../assets/imgs/PerfilDesigner.png";
import perfilDev from "../../assets/imgs/PerfilDev.png";
import perfilArtista from "../../assets/imgs/PerfilArtista.png";
import "./styles.css";

const dadosApresentacao = {
  Pessoa: {
    titulo: "Apaixonado por tecnologia, design e criatividade",
    foto: perfilPessoa,
    linkCurriculo: "#curriculo-pessoa"
  },
  Designer: {
    titulo: "Há +2 anos transformando ideias em experiências",
    foto: perfilDesigner,
    linkCurriculo: "#curriculo-designer"
  },
  Desenvolvedor: {
    titulo: "Desenvolvedor front-end, estudante de ADS na Fatec SP",
    foto: perfilDev,
    linkCurriculo: "#curriculo-dev"
  },
  Artista: {
    titulo: "Flautista, compositor e cantor de chuveiro",
    foto: perfilArtista,
    linkCurriculo: "#curriculo-artista"
  }
};

// Função para formatar o título e adicionar um <span> nas palavras específicas
const formatarTitulo = (titulo) => {
  const palavrasDestacadas = [
    { palavra: "experiências", destaque: "experiências" },
    { palavra: "criatividade", destaque: "criatividade" },
    { palavra: "Fatec SP", destaque: "Fatec SP" },
    { palavra: "Flautista", destaque: "Flautista" }
  ];

  return palavrasDestacadas.reduce((texto, { palavra, destaque }) => {
    const regex = new RegExp(`(${palavra})`, "gi");
    return texto.replace(regex, `<span class="destaque">${destaque}</span>`);
  }, titulo);
};

const Tabs = () => {
  const [abaAtiva, setAbaAtiva] = useState("Designer");

  return (
    <div className="tabs-container">
      <div className="tabs">
        {Object.keys(dadosApresentacao).map((aba) => (
          <button
            key={aba}
            className={`tab ${abaAtiva === aba ? "ativa" : ""}`}
            onClick={() => setAbaAtiva(aba)}
          >
            {aba}
          </button>
        ))}
      </div>
      <Apresentacao
        titulo={formatarTitulo(dadosApresentacao[abaAtiva].titulo)}
        foto={dadosApresentacao[abaAtiva].foto}
        linkCurriculo={dadosApresentacao[abaAtiva].linkCurriculo}
      />
    </div>
  );
};

export default Tabs;
