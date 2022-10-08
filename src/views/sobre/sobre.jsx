
import Header from '../../components/header/header';
import './sobre.scss'
import icone from "../../assets/icone.png";

const Sobre = () => {
    return (
        <div className="sobrePage">
            <section>
                
                <Header/>

                <section className='front'>
                    <div>
                        
                        <div className='image'>
                            <h1>Museu Universitário <span>Academia</span> </h1>
                            <img draggable="false" src={icone} alt="icone"></img>
                                                        
                        </div>
                        
                        <div className='title'>
                            <h1> Museu de Etnologia Indígena e História Natural</h1>
                        </div>
                    </div>
                </section>
                    <br></br>
                <section className='content'>
                    <div className='body_text'>
                        <h1>
                            Museu Universitário Academia
                        </h1>
                        <h2>
                            <p>O Museu Universitário Academia, com acervos de Etnologia Indígena e de História Natural, presenteiam a cidade de Juiz de Fora e região com um valioso patrimônio cultural relativo à cultura dos povos indígenas e a história dos seres vivos na natureza.</p>

                            <p>Projetados para a função museal, os dois salões de exposição, com 400 m2 cada, são totalmente climatizados, propiciando aos visitantes muito conforto, beleza e aconchego. A reserva técnica e laboratório de História Natural, com aproximadamente 30 mil peças, está em salão à parte.</p>

                            <p>No Museu de História Natural, hoje, com 1.300 peças, evidenciam-se exemplares de fósseis, minerais, rochas, animais secos, em via úmida ou taxidermizados, ossos e réplicas de peças raras.</p>

                            <p>O Museu de Etnologia Indígena, com 400 peças indígenas de etnias nacionais e africanas em exposição e 3.600 em reserva técnica, possui também em seu acervo peças oriundas de outras etnias, todas originais.</p>

                            <p>Com a certeza de que a atividade Museal deve estar sempre a serviço da educação, a equipe desenvolve atividades práticas e teóricas de ensino, com qualidade, envolvendo alunos da Educação Infantil ao Ensino Superior, inclusive de outras instituições educacionais públicas e privadas, além do atendimento ao público individualizado.</p>

                            <p>A pesquisa interna é, também, outro pilar de sustentação das atividades. Todo o trabalho de manutenção, conservação e restauração das peças é desenvolvido em laboratório próprio, o que impõe uma atualização constante dos dados nos registros informatizados, fundamental para o acompanhamento das mudanças e aperfeiçoamentos do conhecimento científico.</p>

                            <p>Abertos à comunidade para visitação permanente, os Museus cumprem um papel de importância social. As visitas são gratuitas e monitoradas por profissionais devidamente preparados e qualificados. Ponto de referência cultural na cidade de Juiz de Fora e região, os dois salões recebem anualmente um público médio de 2 mil pessoas.</p>
                        </h2>


                        
                    </div>

                    <div className='rightside'>
                        

                    </div>

                </section>
                
                
            </section>
        </div>
    );
}
export default Sobre;