import React from 'react';
import BotaoLinkedin from './BotaoLinkedIn';
import BotaoCurriculo from './BotaoCurriculo';
import './styles.css';

const Botoes = ({ className, mostrar }) => {
  return (
    <div className={`botoes ${className}`}>
      {mostrar === 'linkedin' && <BotaoLinkedin />}
      {mostrar === 'curriculo' && <BotaoCurriculo />}
      {mostrar === 'todos' && (
        <>
          <BotaoLinkedin />
          <BotaoCurriculo />
        </>
      )}
    </div>
  );
};

export default Botoes;
