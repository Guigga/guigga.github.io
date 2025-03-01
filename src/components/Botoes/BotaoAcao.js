import React, { useState } from "react";
import setaCima from "../../assets/imgs/SetaCima.svg";
import setaLado from "../../assets/imgs/SetaLado.svg";
import "./styles.css";

const BotaoAcao = ({ link, texto }) => {
  const [icon, setIcon] = useState(setaCima);

  return (
    <a
      href={link}
      className="botao acao"
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => setIcon(setaLado)}
      onMouseOut={() => setIcon(setaCima)}
    >
      <span className="botao-texto">{texto}</span>
      <img src={icon} alt="Ícone Seta" className="botao-icon" />
    </a>
  );
};

export default BotaoAcao;
