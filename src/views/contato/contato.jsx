import Header from "../../components/header/header";
import "./contato.scss";
import Fachada from "../../assets/fachada.jpg";

const Contato = () => {
  return (
    <div className="visitPage">
      <section>
        <Header />
        <section className="container">
          <div className="header-img">
            <img
              src={Fachada}
              className="fachada"
              alt="Fachada do colegio academia"
            />
            <div className="info">
              <div className="horario">
                <div className="icon">
                  <i className="fa-regular fa-clock"></i>
                </div>

                <h1>Horário</h1>
                <p>De segunda a sexta-feira, das 13h às 17h.</p>
                <p>Fechado sábados, domingos e feriados</p>
              </div>

              <div className="contato">
                <div className="icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <h1>Onde estamos</h1>
                <p>
                  Rua Halfeld, 1179 - Centro - CEP 36.016-000 - Juiz de Fora -
                  MG
                </p>
                <p>
                  <a
                    href="https://www.google.com.br/maps/dir/-21.7757602,-43.3970179/UniAcademia+(CES%2FJF)+-+Campus+Academia+-+R.+Halfeld,+1.179+-+Centro,+Juiz+de+Fora+-+MG,+36016-000/@-21.7651847,-43.3798992,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x989b61e5bb4d59:0x8a1d7c0df90967f6!2m2!1d-43.3530921!2d-21.7625812"
                    target="_blank"
                  >
                    Check o Google Maps
                  </a>
                </p>
              </div>

              <div className="entrada">
                <div className="icon">
                  <i className="fa-solid fa-ticket"></i>
                </div>
                <h1>Entrada</h1>
                <p>
                  Entrada é <span>gratuita</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="guia">
          <div className="guia-titulo">
            <h1>Guia de Visita</h1>
          </div>
          <div className="guia-paragrafo">
            <p>
              Seguindo as indicações da Prefeitura de Juiz de Fora (PJF), a
              partir desta quarta-feira, dia 8 de junho, volta a ser obrigatório
              o uso de máscaras em instituições <br /> de ensino. Logo, a partir
              dessa data, será exigido o uso de máscaras no UniAcademia, Colégio
              Academia e o Museu Universitário Academia. <br /> Isso vale para
              as salas de aula, laboratórios, banheiros, corredores e qualquer
              outro ambiente dos campus.
            </p>
            <p>
              A volta se dá após o crescimento do número de casos e de
              contaminações por Covid-19, confirmados pelo monitoramento do
              cenário epidemiológico.
            </p>
            <p>
              Por isso, mantenha-se seguro com o uso da máscara cobrindo o rosto
              e do álcool em gel.
            </p>
          </div>
        </section>

        <section>
          <div className="redes-sociais">
            <h1>Visite as redes sociais do Museu Academia</h1>
            <div className="social-list">
              <div className="instagram">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="facebook">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="youtube">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Contato;
