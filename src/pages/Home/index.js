import React from "react";

// Meus imports
import Header from '../../components/Header';
import Tabs from "../../components/Tabs";
import TituloSessao from "../../components/TituloSessao"; // Importando o novo componente
import CardTrabalho from "../../components/CardTrabalho";
import Contratar from '../../components/Contratar';
import Motivacional from '../../components/Motivacional';
import Footer from '../../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <Tabs />
            
            {/* Títulos das sessões*/}
            <TituloSessao
                titulo="Meus Trabalhoooooooooooooooooooos"
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
