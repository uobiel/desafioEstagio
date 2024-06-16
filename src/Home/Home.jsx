import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import LogicaAlbuns from "../utils/logicaAlbuns";
import './MediaQuery.css'
import './swipper.css';

const Home = () => {
    const [conteudoAtivo, setConteudoAtivo] = useState(null);

    useEffect(() => {
        ScrollReveal().reveal('.effect', {
            delay: 0,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'top',
            duration: 700,
            reset: true
        });

        ScrollReveal().reveal('.effectLeft', {
            delay: 0,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'left',
            duration: 700,
            reset: true
        });

        ScrollReveal().reveal('.effectBottom', {
            delay: 0,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom',
            duration: 700,
            reset: true
        });
    }, []);

    const handleClick = (conteudo) => {
        setConteudoAtivo(conteudo);
    };

    const data = [
        { id: '1', text: 'Música para todos' },
        { id: '2', text: 'As melhores rádios' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.imageCover}></div>

            <header>
                <div className={`${styles.logoContainer} logoQuery`}></div>
                <nav>
                    <a href="#">Premium</a>
                    <a href="#">Ajuda</a>
                    <a href="#">Baixar</a>
                    <span> | </span>
                    <a href="#">Entrar</a>
                </nav>
            </header>

            <section className={`effect ${styles.carrosselContainer} `}>
                <div className={`${styles.carrossel} carrosselMedia`}>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        navigation
                        loop={true}
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={styles.containerTextCarrossel}>
                                    <h1 className={`${styles.textCarrossel} textQuery`}>{item.text}</h1>
                                    {item.id === '1' ? (
                                        <div className={`${styles.containerButtons} buttonMedia`}>
                                            <button id={styles.buttonFree} className={styles.buttonLayout}>APROVEITE O SPOTIFY FREE</button>
                                            <button id={styles.buttonPremium} className={styles.buttonLayout}>OBTER O SPOTIFY PREMIUM</button>
                                        </div>
                                    ) : (
                                        <div className={`${styles.containerButtons} buttonMedia`}>
                                            <button id={styles.buttonPremium} className={`${styles.buttonLayout} ${styles.buttonOucaAgoraImage}`}>Ouça agora</button>
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className={`${styles.sessaoDois} sessaoDoisQuery`}>
                <div className={`${styles.content} effectLeft contentMedia`}>
                    <div className={styles.albuns}>
                        <div className={styles.linha}>
                            <div className={`${styles.img1} ${styles.cardImg}`} onClick={() => handleClick('img1')}></div>
                            <div className={`${styles.img2} ${styles.cardImg}`} onClick={() => handleClick('img2')}></div>
                        </div>

                        <div className={styles.linha}>
                            <div className={`${styles.img3} ${styles.cardImg}`} onClick={() => handleClick('img3')}></div>
                            <div className={`${styles.img4} ${styles.cardImg}`} onClick={() => handleClick('img4')}></div>
                        </div>
                    </div>
                    <div className={styles.textosAlbuns}>
                        <LogicaAlbuns conteudoAtivo={conteudoAtivo} setConteudoAtivo={setConteudoAtivo} />
                    </div>
                </div>
            </section>

            <section className={styles.sessaoTres}>
                <div className={styles.imageCover}></div>

                <div className={styles.containerSessaoTres}>
                    <div className={`${styles.content} sessaoTresQuery`}>
                        <div className={`${styles.texto} textoSessaoTresQuery`}>
                            <h1 className="effectLeft">Fácil</h1>
                            <h2 className="effectLeft">Buscar</h2>
                            <p className="effectLeft">Já sabe o que quer escutar? É só procurar e apertar o play</p>

                            <h2 className="effectLeft">Navegar</h2>
                            <p className="effectLeft">Veja os novos lançamentos, o que está  bombando nas paradas e as melhores <br /> playlists para o seu momento</p>

                            <h2 className="effectLeft">Descobrir</h2>
                            <p className="effectLeft">Curta músicas novas toda segunda-feira com uma playlist personalizada pra <br />você. Ou relaxe e curta uma das rádios</p>
                        </div>

                        <div className={`${styles.imagens} imagensContainerQuery`}>
                            <img className={`${styles.iphone1} effect iphoneQuery`} src="src\assets\iphone1.png" alt="" />
                            <img className={`${styles.iphone2} effect iphoneQuery`} src="src\assets\iphone2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <footer className={`${styles.footerBlack} effectBottom`}>
                <div className={styles.content}>
                    <div className={styles.logoContainer}></div>
                    <p style={{ color: "white" , cursor: "pointer"}}><strong>COMPANY</strong> <br /> Sobre <br />Empregos <br /> Imprensa <br /> Novidade</p>
                    <p style={{ color: "white" , cursor: "pointer"}}><strong>COMUNIDADES</strong> <br /> Artistas <br /> Desenvolvedores <br /> Marcas</p>
                    <p style={{ color: "white" , cursor: "pointer"}}><strong>LINKS ÚTEIS</strong> <br />Ajuda <br />Presentes <br />Player na web</p>
                    <div className={styles.containerSocial}>
                        <img style={{ cursor: "pointer"}} src="src\assets\facebook.png" alt="facebook" />
                        <img style={{ cursor: "pointer"}} src="src\assets\instagram.png" alt="instagram" />
                        <img style={{ cursor: "pointer"}} src="src\assets\twitter.png" alt="twitter" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;