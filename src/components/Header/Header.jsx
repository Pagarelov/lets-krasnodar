import styles from './Header.module.css';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>Lets Krasnodar</div>
            <nav className={styles.nav}>
                <a href="#about" className={styles.link}>Лента</a>
                <a href="#contacts" className={styles.link}>Контакты</a>
                <a href="#login" className={styles.link}>Войти/Регистрация</a>
            </nav>
        </div>
    </header>
);

export default Header;