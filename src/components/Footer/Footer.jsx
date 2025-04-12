import styles from "./Footer.module.css";

const Footer = ({ id }) => (
    <footer id={id} className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.contactsBlock}>
                <h4 className={styles.contactsTitle}>Контакты</h4>
                <div className={styles.contactsContent}>
                    <a href="tel:+78005553535" className={styles.phone}>
                        +7 (800) 555-35-35
                    </a>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialLink} aria-label="ВКонтакте">
                            <i className="fab fa-vk"></i>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className={styles.socialLink} aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.infoBlock}>
                <p className={styles.copyright}>&copy; 2024 TravelKrasnodar</p>
                <p className={styles.address}>
                    г. Краснодар, ул. Красная, 100
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;