import { useState } from 'react';
import { FaWalking, FaSnowflake, FaTree, FaWater } from 'react-icons/fa';
import styles from './HeroSection.module.css';

const HeroSection = ({ id }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image: '/img/img1.png',
            icon: <FaWalking />,
            title: 'Картинг',
            description: 'Единственный крытый картодром в Центральном Сочи.',
            color: '#ff5200'
        },
        {
            image: '/img/img2.png',
            icon: <FaWater />,
            title: 'Аренда Яхты',
            description: 'Аренда яхты в Сочи.',
            color: '#ca470a'
        },
        {
            image: '/img/img3.png',
            icon: <FaTree />,
            title: 'Ферма Альпак',
            description: 'Посетите уникальную ферму альпак в Горячем Ключе!',
            color: '#00d9ff'
        },
        {
            image: '/img/img4.png',
            icon: <FaSnowflake />,
            title: 'Полет на вертолете',
            description: 'Обзорные полеты на вертолете в Сочи.',
            color: '#0077ff'
        }
    ];

    return (
        <div id={id} className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.sectionTitle}>
                        Откройте для себя<br/>
                        <span className={styles.highlight}>лучшие развлечения</span><br/>
                        Краснодарского края
                    </h1>
                    <p className={styles.sectionDescription}>
                        Уникальные впечатления и незабываемые приключения всего в одном клике
                    </p>
                </div>


                <div className={styles.sliderBlock}>
                    <div className={styles.boxArea}>
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`${styles.box} ${index === activeIndex ? styles.active : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img src={slide.image} alt={slide.title} className={styles.boxImage}/>
                                <div className={styles.icon} style={{color: slide.color}}>
                                    {slide.icon}
                                </div>
                                <h2 className={styles.boxTitle}>{slide.title}</h2>
                                <p className={styles.boxDescription}>{slide.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;