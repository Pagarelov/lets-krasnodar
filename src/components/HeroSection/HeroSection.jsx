import { useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        { image: '/img/img1.png', title: 'г.Сочи', description: 'Картинг' },
        { image: '/img/img2.png', title: 'г.Сочи', description: 'Аренда Яхты' },
        { image: '/img/img3.png', title: 'г.Горячий Ключ', description: 'Ферма Альпак' },
        { image: '/img/img4.png', title: 'г.Сочи', description: 'Полет на вертолете' },
        { image: '/img/img5.png', title: 'г.Краснодар', description: 'Дайвинг' },
        { image: '/img/img6.png', title: 'г.Анапа', description: 'Парапланеризм' },
        { image: '/img/img7.png', title: 'г.Геленджик', description: 'Дельфинарий' },
        { image: '/img/img8.png', title: 'г.Туапсе', description: 'Рафтинг' },
    ];

    const visibleSlides = 4;
    const totalGroups = Math.ceil(slides.length / visibleSlides);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalGroups);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
    };

    const getVisibleSlides = () => {
        const start = currentIndex * visibleSlides;
        const end = start + visibleSlides;
        return slides.slice(start, end);
    };

    return (
        <div id={id} className={styles.heroSection}>
            <div className={styles.sliderContainer}>
                <button
                    className={styles.navButton}
                    onClick={handlePrev}
                    aria-label="Previous"
                >
                    &lt;
                </button>

                <div className={styles.sliderWindow}>
                    <div className={styles.sliderTrack}>
                        {getVisibleSlides().map((slide, index) => (
                            <div
                                key={index}
                                className={styles.slideItem}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={styles.boxImage}
                                />
                                <div className={styles.content}>
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className={styles.navButton}
                    onClick={handleNext}
                    aria-label="Next"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default HeroSection;