import React from 'react';
import './styles.css';

const Contratar = () => {
  return (
    <section className="contratar-container">
      <p className="contratar-texto">
        Sou apaixonado por aprender. Possuo experiência em prototipação, criação de interfaces e manutenção de Design Systems. 
        Posso agregar valor ao seu time, trazendo soluções eficientes e funcionais. Estou sempre em busca de desafios para crescer como 
        profissional e colaborar no sucesso de cada projeto.
      </p>

      <div className="contratar-estatisticas">
        <div className="contratar-estatistica">
          <div className="contratar-numero">+2</div>
          <div className="contratar-label">Anos de experiência</div>
        </div>
        <div className="contratar-linha-vertical"></div>
        <div className="contratar-estatistica">
          <div className="contratar-numero">03</div>
          <div className="contratar-label">Contribuições em projetos</div>
        </div>
        <div className="contratar-linha-vertical"></div>
        <div className="contratar-estatistica">
          <div className="contratar-numero">∞</div>
          <div className="contratar-label">Vontade de aprender</div>
        </div>
      </div>
    </section>
  );
};

export default Contratar;
