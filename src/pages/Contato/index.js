import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Botoes from "../../components/Botoes";
import MailIcon from "../../assets/imgs/mail.svg";
import MapPinIcon from "../../assets/imgs/map-pin.svg";

const Contato = () => {
  return (
    <>
    <Header />
    
    <div className="contato-container">
      <h1 className="contato-titulo">Contato</h1>
      <p className="contato-texto">
        Vamos transformar ideias em experiências juntos!
      </p>

      <div className="contato-info">
        <div className="contato-item">
          <img src={MailIcon} alt="E-mail" />
          <span>guilhermecarmosp@hotmail.com</span>
        </div>
        <div className="contato-item">
          <img src={MapPinIcon} alt="Localização" />
          <span>São Paulo, Brasil</span>
        </div>
      </div>

      <Botoes mostrar="todos" />

    </div>

    <Footer />

    </>
  );
};

export default Contato;
