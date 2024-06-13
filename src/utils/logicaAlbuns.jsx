import React from "react";
import styles from '../Home/Home.module.css'

const LogicaAlbuns = ({ conteudoAtivo, setConteudoAtivo }) => {
    return (
        <>
            {conteudoAtivo === null && (
                <>
                    <h1>O que o Spotify tem?</h1>
                    <h2>Músicas</h2>
                    <p>O Spotify tem milhões de músicas. Escute seus sons favoritos, descubra novas músicas e reúna seus favoritos em um só lugar.</p>
                    <h2>Playlists</h2>
                    <p>No Spotify você encontra uma playlist para cada momento. Todas feitas por fanáticos e especialistas da música.</p>
                    <h2>Novos lançamentos</h2>
                    <p>Escute os novos lançamentos de singles e álbuns da semana e veja o que está bombando no Top 50.</p>
                </>
            )}

            {conteudoAtivo === 'img1' && (
                <>
                    <h1>O que é Lorem Ipsum</h1>
                    <h2>Porque é que usamos?</h2>
                    <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                    <h2>De onde ele vem?</h2>
                    <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                    <h2>Onde posso arranjar algum?</h2>
                    <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                </>
            )}

            {conteudoAtivo === 'img2' && (
                <>
                    <div className={styles.containerText2}>
                        <h1>O que é Lorem Ipsum</h1>
                        <h2>Porque é que usamos?</h2>
                        <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                    </div>
                </>
            )}

            {conteudoAtivo === 'img3' && (
                <>
                    <h1 className={styles.efeitoTranslate}>O que é Lorem Ipsum</h1>
                    <h2>Porque é que usamos?</h2>
                    <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                    <h2 className={styles.efeitoTranslate}>De onde é que ele vem?</h2>
                    <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                    <h2>Onde posso arranjar algum?</h2>
                    <p>Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Adobe PageMaker, que incluem versões do Lorem Ipsum.</p>
                </>
            )}

            {conteudoAtivo === 'img4' && (
                <>
                    <div className={styles.linha}>
                        <div
                            className={`${styles.img5} ${styles.cardImg}`}
                        ></div>
                        <div
                            className={`${styles.img6} ${styles.cardImg}`}
                        ></div>
                    </div>

                    <div className={styles.linha}>
                        <div
                            className={`${styles.img7} ${styles.cardImg}`}
                        ></div>
                        <div
                            className={`${styles.img8} ${styles.cardImg}`}
                        ></div>
                    </div>
                </>
            )}
        </>
    );
};

export default LogicaAlbuns;