import React, { useEffect } from "react";
import styles from './Home.module.css';
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './swipper.css'

const Home = () => {
    useEffect(() => {
        ScrollReveal().reveal('.effect', {
            delay: 0,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'top',
            duration: 700,
            reset: false
        });
    }, []);


    const data = [
        { id: '1', text: 'Música para todos' },
        { id: '2', text: 'As melhores rádios' },
    ];

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageCover}></div>

                <header>
                    <div className={styles.logoContainer}></div>
                    <nav>
                        <a href="#">Premium</a>
                        <a href="#">Ajuda</a>
                        <a href="#">Baixar</a>
                        <span> | </span>
                        <a href="#">Entrar</a>
                    </nav>
                </header>

                <section className={`effect ${styles.carrosselContainer} `}>
                    <div className={styles.carrossel}>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation
                            loop={true}
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.containerTextCarrossel}>
                                        <h1 className={styles.textCarrossel}>{item.text}</h1>
                                        {item.id === '1' ? (
                                            <div className={styles.containerButtons}>
                                                <button id={styles.buttonFree} className={styles.buttonLayout}>APROVEITE O SPOTIFY FREE</button>
                                                <button id={styles.buttonPremium} className={styles.buttonLayout}>OBTER O SPOTIFY PREMIUM</button>
                                            </div>
                                        ) : (
                                            <div className={styles.containerButtons}>
                                                <button id={styles.buttonPremium} className={`${styles.buttonLayout} ${styles.buttonOucaAgoraImage}`}>Ouça agora</button>
                                            </div>
                                        )}
                                    </div >
                                </SwiperSlide >
                            ))}
                        </Swiper >
                    </div >
                </section >
            </div >
        </>
    );
}

export default Home;
