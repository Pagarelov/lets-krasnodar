import { useState } from 'react';
import Map from '../Map/Map.jsx';
import styles from './TourPlan.module.css';

const TourPlan = () => {
    const [isMapVisible, setIsMapVisible] = useState(false);

    const handleRouteClick = () => setIsMapVisible(true);
    const closePopup = () => setIsMapVisible(false);

    return (
        <section className={styles.tourPlan} id="tours">
            <div className={styles.contentWrapper}>
                <div  className={styles.textContent}>
                    <h2 className={styles.mainTitle}>Даже лучше, чем в Дубай</h2>
                    <p className={styles.subtitle}>Планируйте свой идеальный отпуск в Краснодарском крае</p>
                </div>

                <div className={styles.routeCard}>
                    <div className={styles.routeHeader}>
                        <h3 className={styles.routeTitle}>Маршрут на квадрацикле</h3>
                        <div className={styles.routeDetails}>
                            <span className={styles.direction}>↩ развернитесь</span>
                            <span className={styles.distance}>50 м</span>
                        </div>
                    </div>
                    <button
                        onClick={handleRouteClick}
                        className={styles.routeButton}
                    >
                        Проложить маршрут
                    </button>
                </div>
            </div>

            {isMapVisible && (
                <div className={styles.mapModal}>
                    <div className={styles.modalOverlay} onClick={closePopup} />
                    <div className={styles.modalContent}>
                        <button
                            className={styles.closeButton}
                            onClick={closePopup}
                            aria-label="Закрыть карту"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <div className={styles.mapContainer}>
                            <Map />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TourPlan;