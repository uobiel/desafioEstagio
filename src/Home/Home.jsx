import React from "react";
import styles from './Home.module.css'
import { useEffect } from 'react';
import ScrollReveal from "scrollreveal";

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

    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageCover}>

                </div>

                <header>
                    <div className={`${styles.logoContainer}`}>

                    </div>
                    <nav>
                        <a href="#">Premium</a>
                        <a href="#">Ajuda</a>
                        <a href="#">Baixar</a>
                        <span> | </span>
                        <a href="#">Entrar</a>
                    </nav>
                </header>

                <section className={`effect ${styles.carrossel}`}>
                    <h1 className={styles.textCarrossel}>Música para todos</h1>

                    <div className={styles.containerButtons}>
                        <button id={styles.buttonFree} className={styles.buttonLayout}>APROVEITE O SPOTIFIY FREE</button>
                        <button id={styles.buttonPremium} className={styles.buttonLayout}>OBTER O SPOTIFY PREMIUM</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home