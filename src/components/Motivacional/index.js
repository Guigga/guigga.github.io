import React from 'react';
import './styles.css'; // Importando o estilo CSS
import Botoes from '../Botoes';

const Motivacional = () => {
  return (
    <section className="motivacional">
      <div className="texto-motivacional">
        <p>Vamos transformar ideias em experiências juntos!</p>
      </div>
      <Botoes className="motivacional" mostrar="linkedin" />
    </section>
  );
};

export default Motivacional;
