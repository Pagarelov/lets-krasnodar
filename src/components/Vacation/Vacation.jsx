import { useState } from 'react';
import styles from './Vacation.module.css';

const Vacation = () => {
    const [selectedVacation, setSelectedVacation] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        dates: ''
    });

    const vacations = [
        {
            id: 1,
            title: 'Горный курорт "Альпийские луга"',
            price: 'от 15 000₽/ночь',
            image: '/img/alpine.jpg',
            description: 'Комфортабельные домики в горах с панорамным видом',
            contacts: '+7 (999) 123-45-67'
        },
        {
            id: 2,
            title: 'Вилла на Черноморском побережье',
            price: 'от 25 000₽/ночь',
            image: '/img/villa.jpg',
            description: 'Элитный отдых в私人ной вилле с выходом к морю',
            contacts: '+7 (999) 765-43-21'
        },
        // Добавьте другие варианты
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику отправки данных
        console.log('Данные для бронирования:', formData);
        setSelectedVacation(null);
        alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className={styles.vacationSection} id="vacation">
            <h2 className={styles.sectionTitle}>Лучшие предложения для отдыха</h2>

            <div className={styles.vacationGrid}>
                {vacations.map((item) => (
                    <div
                        key={item.id}
                        className={styles.vacationCard}
                        onClick={() => setSelectedVacation(item)}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className={styles.vacationImage}
                        />
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardPrice}>{item.price}</p>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedVacation && (
                <div className={styles.bookingOverlay}>
                    <div className={styles.bookingPopup}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedVacation(null)}
                        >
                            &times;
                        </button>

                        <h3>{selectedVacation.title}</h3>
                        <p className={styles.contacts}>Контакты: {selectedVacation.contacts}</p>

                        <form onSubmit={handleSubmit} className={styles.bookingForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Ваше имя:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Номер телефона:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    pattern="\+7\s?[0-9]{3}\s?[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                    placeholder="+7 XXX XXX-XX-XX"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="dates">Даты отдыха:</label>
                                <input
                                    type="date"
                                    id="dates"
                                    name="dates"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Vacation;