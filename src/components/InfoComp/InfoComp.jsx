import styles from "./InfoComp.module.css";

const InfoComp = () => (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={`${styles.header__nawbar} ${styles.nawbar}`} >
                <div className={styles.nawbar_logo}>
                    <span className={styles.logo}>MapApp</span>
                </div>
                <div className={styles.header__right_menu}>
                    <nav className={styles.nawbar__navigation}>
                        <ul className={`${styles.nawbar__list} ${styles.list}`}>
                            <li className={`${styles.nawbar__item} ${styles.itm}`} ><a href="" className={`${styles.nawbar__link} ${styles.link} ${styles.active}`}>О нас</a>
                            </li>
                            <li className={`${styles.nawbar__item} ${styles.itm}`}><a href="" className={`${styles.nawbar__link} ${styles.link}`}>карта</a></li>
                            <li className={`${styles.nawbar__item} ${styles.itm}`}><a href="" className={`${styles.nawbar__link} ${styles.link}`}>направления</a>
                            </li>
                            <li className={`${styles.nawbar__item} ${styles.itm}`}><a href="" className={`${styles.nawbar__link} ${styles.link}`}>развлечения</a>
                            </li>
                            <li className={`${styles.nawbar__item} ${styles.itm}`}><a href="" className={`${styles.nawbar__link} ${styles.link}`}>контакты</a></li>
                        </ul>
                    </nav>
                    <div className={`${styles.header__language} ${styles.language}`}>
                        <ul className={`${styles.language__list} ${styles.list}`}>
                            <li className={`${styles.language__item} ${styles.itm}`}>
                                <a href="" className={`${styles.language__link} ${styles.link}`}>
                                    Ar
                                </a>
                            </li>
                            <li className={`${styles.language__item} ${styles.itm}`}>
                                <a href="" className={`${styles.language__link} ${styles.link}`}>
                                    En
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={styles.header__offer}>
                <div className={styles.header__image}>

                </div>
                <div className={styles.header__offer_text}>
                    <div className={styles.offer_info}>
                        <h1 className={styles.offer_title}>Даже лучше, чем в Дубаe</h1>
                        <div className={styles.offer_paragrph}>
                            Планируйте свой идеальный отпуск в Краснодарском крае с нашим удобным планировщиком
                            маршрутов
                        </div>
                    </div>
                    <button className={`${styles.offer__button} ${styles.btn}`}>Проложить маршрут</button>
                    <div className={styles.square1}></div>
                    <div className={styles.square2}></div>
                </div>
            </div>
        </div>
    </div>
);

export default InfoComp;