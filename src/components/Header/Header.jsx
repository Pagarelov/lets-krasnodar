import { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen &&
                !menuRef.current.contains(e.target) &&
                !burgerRef.current.contains(e.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <header className={`${styles.header} ${isMenuOpen ? styles.active : ''}`}>
            <div className={styles.container}>
                <ScrollLink
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={styles.logo}
                >
                    Lets Krasnodarskiy Kray
                </ScrollLink>

                <nav
                    ref={menuRef}
                    className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}
                >
                    <ScrollLink
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.link}
                        onClick={closeMenu}
                    >
                        Главная
                    </ScrollLink>

                    <ScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.link}
                        onClick={closeMenu}
                    >
                        О нас
                    </ScrollLink>

                    <ScrollLink
                        to="tours"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.link}
                        onClick={closeMenu}
                    >
                        Карта
                    </ScrollLink>

                    <ScrollLink
                        to="tours"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.link}
                        onClick={closeMenu}
                    >
                        Услуги
                    </ScrollLink>


                    <ScrollLink
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.link}
                        onClick={closeMenu}
                    >
                        Контакты
                    </ScrollLink>
                </nav>

                <button
                    ref={burgerRef}
                    className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;