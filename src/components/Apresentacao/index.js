import perfil from '../../assets/imgs/Perfil.jpg';
import Botoes from '../Botoes';

const Apresentacao = () => {
  return (
    <section className="apresentacao">
      <div className="texto">
        <h1>
          Product Designer - UX / UI<br />
          Há +2 anos transformando<br />
          ideias em <span className="experiencia">experiências</span>
        </h1>
        <Botoes mostrar="todos" />
      </div>
      <div className="foto">
        <img src={perfil} alt="Foto do perfil" />
      </div>
    </section>
  );
};

export default Apresentacao;
