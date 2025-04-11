import styles from "./Footer.module.css";

const Footer = () => (
    <footer className={styles.contacts}>
        <div className={styles.container}>
            <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink}><i className="fab fa-vk"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-facebook"></i></a>
            </div>
            <p>&copy; 2024 Lets Krasnodar</p>
        </div>
    </footer>
);

export default Footer;