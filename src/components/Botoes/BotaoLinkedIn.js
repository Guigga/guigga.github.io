import React from 'react';
import linkedinButtonDefault from '../../assets/imgs/LinkedInButton-Default.svg';
import linkedinButtonHover from '../../assets/imgs/LinkedInButton-Hoover.svg';
import './styles.css';

const BotaoLinkedin = () => {
  return (
    <a href="https://www.linkedin.com/in/gcarmo/" className="botao linkedin" target="_blank" rel="noopener noreferrer">
      <img
        src={linkedinButtonDefault}
        alt="LinkedIn"
        className="botao-img"
        onMouseOver={(e) => (e.target.src = linkedinButtonHover)}
        onMouseOut={(e) => (e.target.src = linkedinButtonDefault)}
      />
    </a>
  );
};

export default BotaoLinkedin;
