import React from 'react';
import documentoIcon from '../../assets/imgs/DocumentoIcon.svg';
import './styles.css';

const BotaoCurriculo = () => {
  return (
    <a 
      href="https://drive.google.com/file/d/1rljg5ENECN5W_kjKD3TFq098QdBD1iVc/view?usp=sharing" 
      className="botao curriculo" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <span className="botao-texto">Currículo</span>
      <img src={documentoIcon} alt="Ícone Documento" className="botao-icon" />
    </a>
  );
};

export default BotaoCurriculo;
