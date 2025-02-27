import React from 'react';
import curriculoButtonDefault from '../../assets/imgs/CurriculoButton-Default.svg';
import curriculoButtonHover from '../../assets/imgs/CurriculoButton-Hoover.svg';
import './styles.css';

const BotaoCurriculo = () => {
  return (
    <a 
      href="https://drive.google.com/file/d/1VvCRoNNKRutefKx7kT-OvNi8nOtyCISH/view" 
      className="botao curriculo" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img
        src={curriculoButtonDefault}
        alt="Currículo"
        className="botao-img"
        onMouseOver={(e) => (e.target.src = curriculoButtonHover)}
        onMouseOut={(e) => (e.target.src = curriculoButtonDefault)}
      />
    </a>
  );
};

export default BotaoCurriculo;
