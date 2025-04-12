import { useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({id}) => {
    const slides = [
        {
            image: '/img/img1.png',
            title: 'Картинг',
            description: 'г. Сочи'
        },
        {
            image: '/img/img2.png',
            title: 'Аренда Яхты',
            description: 'г. Сочи'
        },
        {
            image: '/img/img3.png',
            title: 'Ферма Альпак',
            description: 'г. Горячий ключ'
        },
        {
            image: '/img/img4.png',
            title: 'Полет на вертолете',
            description: 'г. Сочи'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div id={id} className={styles.sliderContainer}>
            <div
                className={styles.sliderWrapper}
                style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
                {slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        <div className={styles.textContainer}>
                            <p className={styles.slideDescription}>{slide.description}</p>
                            <h3 className={styles.slideTitle}>{slide.title}</h3>
                        </div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={styles.slideImage}
                        />
                    </div>
                ))}
            </div>

            <button className={styles.prevButton} onClick={handlePrev}>&#10094;</button>
            <button className={styles.nextButton} onClick={handleNext}>&#10095;</button>

            <div className={styles.dotsContainer}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;