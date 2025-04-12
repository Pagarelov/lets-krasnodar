import styles from "./Footer.module.css";

const Footer = ({id}) => (
    <footer id={id} className={styles.contacts}>
        <div className={styles.container}>
            <div className={styles.socialIcons}>
                <h4>Свяжитесь с нами:</h4>
                <a href="#" className={styles.socialLink}><i className="fab fa-vk"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-instagram"></i></a>
                <a href="#" className={styles.socialLink}><i className="fab fa-facebook"></i></a>
            </div>
            <p>&copy; 2024 Lets Krasnodarskiy Kray</p>
        </div>
    </footer>
);

export default Footer;