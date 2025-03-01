import React, { useState } from 'react';
import setaCima from '../../assets/imgs/SetaCima.svg';
import setaLado from '../../assets/imgs/SetaLado.svg';
import './styles.css';

const BotaoLinkedin = () => {
  const [icon, setIcon] = useState(setaCima);

  return (
    <a 
      href="https://www.linkedin.com/in/gcarmo/" 
      className="botao linkedin" 
      target="_blank" 
      rel="noopener noreferrer"
      onMouseOver={() => setIcon(setaLado)}
      onMouseOut={() => setIcon(setaCima)}
    >
      <span className="botao-texto">LinkedIn</span>
      <img src={icon} alt="Ícone Seta" className="botao-icon" />
    </a>
  );
};

export default BotaoLinkedin;
