import { Link } from 'react-router';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Страница не найдена</h1>
                <p className={styles.description}>
                    Возможно, эта страница была перемещена или удалена
                </p>
                <div className={styles.animationContainer}>
                    <div className={styles.planet}>
                        <div className={styles.ring}></div>
                        <div className={styles.cover}></div>
                        <div className={styles.spots}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.rocket}>
                        <span>🚀</span>
                    </div>
                </div>
                <Link to="/" className={styles.homeButton}>
                    Вернуться на главную
                </Link>
            </div>
        </div>
    );
};

export default NotFound;