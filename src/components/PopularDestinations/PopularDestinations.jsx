import styles from './PopularDestinations.module.css';

const PopularDestinations = () => {
    const destinations = [
        {
            img: 'Sochi.png',
            title: 'Сочи',
            description: 'Курортная жемчужина Черноморского побережья'
        },
        {
            img: 'Adigei.png',
            title: 'Горная Адыгея',
            description: 'Заповедные леса и горные вершины'
        },
        {
            img: 'Anapa.png',
            title: 'Анапа',
            description: 'Солнечный курорт для семейного отдыха'
        }
    ];

    return (
        <section className={styles.popular} id="tours">
            <div className={styles.container}>
                <h2 className={styles.title}>Популярные направления</h2>
                <div className={styles.cards}>
                    {destinations.map((dest, index) => (
                        <div className={styles.card} key={index}>
                            <img
                                src={`img/${dest.img}`}
                                alt={dest.title}
                                className={styles.cardImage}
                            />
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{dest.title}</h3>
                                <p className={styles.cardDescription}>{dest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;