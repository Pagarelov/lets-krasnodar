import styles from "./AboutUs.module.css";

const teamMembers = [
    {
        id: 1,
        name: "Иван Петров",
        role: "CEO & Основатель",
        bio: "Опыт в управлении проектами более 10 лет. Специалист в области веб-технологий.",
        photo: "/images/team/ivan.jpg",
    },
    {
        id: 2,
        name: "Мария Сидорова",
        role: "CTO",
        bio: "Эксперт в области искусственного интеллекта и машинного обучения.",
        photo: "/images/team/maria.jpg",
    },
    {
        id: 3,
        name: "Алексей Иванов",
        role: "Lead Developer",
        bio: "Full-stack разработчик с фокусом на современных JavaScript-технологиях.",
        photo: "/images/team/alexey.jpg",
    },
    {
        id: 4,
        name: "Ольга Смирнова",
        role: "Дизайнер UX/UI",
        bio: "Создаёт интуитивно понятные интерфейсы с 2015 года.",
        photo: "/images/team/olga.jpg",
    },
];

const TeamMemberCard = ({ member }) => (
    <div className={styles.card}>
        <img
            src={member.photo}
            alt={member.name}
            className={styles.memberPhoto}
        />
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberRole}>{member.role}</p>
        <p className={styles.memberBio}>{member.bio}</p>
    </div>
);

const AboutUs = ({ id }) => (
    <section id={id} className={styles.container}>
        <h2 className={styles.sectionTitle}>Наша Команда</h2>
        <div className={styles.teamGrid}>
            {teamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
            ))}
        </div>
    </section>
);

export default AboutUs;