import React from "react";
import Botoes from "../Botoes";
import "./styles.css";

const Apresentacao = ({ titulo, descricao, foto }) => {
  return (
    <section className="apresentacao">
      <div className="texto">
        {/* Usamos dangerouslySetInnerHTML para injetar o HTML do título com destaque */}
        <h1 dangerouslySetInnerHTML={{ __html: titulo }} />
        <p>{descricao}</p>
        
        {/* Garante que os botões LinkedIn e Currículo estejam sempre presentes */}
        <Botoes mostrar="todos" />
      </div>
      
      <div className="foto">
        <img src={foto} alt="Foto do perfil" />
      </div>
    </section>
  );
};

export default Apresentacao;
