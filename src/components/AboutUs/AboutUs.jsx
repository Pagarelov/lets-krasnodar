import styles from "./AboutUs.module.css";

const teamMembers = [
    {
        id: 1,
        name: "Пагарелов Владимир",
        role: "Frontend Developer",
        bio: "Специалист в области веб-технологий.",
        photo: "/images/team/ivan.jpg",
    },
    {
        id: 2,
        name: "Коновальцев Максим",
        role: "Backend Developer",
        bio: "Специалист в области IT.",
        photo: "/images/team/maria.jpg",
    },
    {
        id: 3,
        name: "Алексей Жилин",
        role: "Design",
        bio: "",
        photo: "/images/team/alexey.jpg",
    },
    {
        id: 4,
        name: "Валерия Яцук",
        role: "Дизайнер UX/UI",
        bio: "Создаёт интуитивно понятные интерфейсы.",
        photo: "/images/team/olga.jpg",
    },
    {
        id: 5,
        name: "Андрей Авакимов",
        role: "Team Lead",
        bio: "",
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