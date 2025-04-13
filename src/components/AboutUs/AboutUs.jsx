import styles from "./AboutUs.module.css";
import vova from './vova.jpg';
import maxim from './maxim.jpg';
import lesha from './lesha.jpg';
import andrey from './andrey.jpg';
import lera from './lera.jpg';

const teamMembers = [
    {
        id: 1,
        name: "Пагарелов Владимир",
        role: "Frontend Developer",
        bio: "Специалист в области веб-технологий.",
        photo: vova,
    },
    {
        id: 2,
        name: "Коновальцев Максим",
        role: "Backend Developer",
        bio: "Отвечает за северную часть",
        photo: maxim,
    },
    {
        id: 3,
        name: "Алексей Жилин",
        role: "Design",
        bio: "Спикер.",
        photo: lesha,
    },
    {
        id: 4,
        name: "Валерия Яцук",
        role: "Дизайнер UX/UI",
        bio: "Создаёт интуитивно понятные интерфейсы.",
        photo: lera,
    },
    {
        id: 5,
        name: "Андрей Авакимов",
        role: "Team Lead",
        bio: "Тимлид и мотиватор.",
        photo: andrey,
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