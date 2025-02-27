import React from "react";

// Meus imports
import styles from './styles.css';
import Header from '../../components/Header';
import Apresentacao from "../../components/Apresentacao";
import TituloSessao from "../../components/TituloSessao"; // Importando o novo componente
import CardTrabalho from "../../components/CardTrabalho";
import Contratar from '../../components/Contratar';
import Motivacional from '../../components/Motivacional';
import Footer from '../../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <Apresentacao />
            
            {/* Títulos das sessões*/}
            <TituloSessao
                titulo="Meus Trabalhos"
                subtitulo="Casos selecionados"
            />

            <CardTrabalho />

            <TituloSessao
                titulo="Meu perfil"
                subtitulo="Por que me contratar?"
            />
            
            <Contratar />

            <TituloSessao
                titulo="Contato"
                subtitulo="guilhermecarmosp@hotmail.com"
            />

            <Motivacional />

            <Footer />
        </>
    )
}
