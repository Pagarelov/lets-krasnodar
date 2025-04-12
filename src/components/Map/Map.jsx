import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

const MapComponent = () => {
    const [activeLocation, setActiveLocation] = useState(null);
    const [isMapExpanded, setIsMapExpanded] = useState(false);

    const locations = [
        {
            id: 1,
            title: "Картинг-центр",
            position: [43.5852, 39.7203],
            image: "/img/karting.jpg",
            description: "Современный картинг-центр мирового уровня"
        },
        {
            id: 2,
            title: "Яхтенная пристань",
            position: [43.5800, 39.7251],
            image: "/img/yacht.jpg",
            description: "Аренда яхт и морские прогулки"
        },
        // Добавьте остальные локации по аналогии
    ];

    const toggleMapSize = () => {
        setIsMapExpanded(!isMapExpanded);
    };

    return (
        <section className={`${styles.container} ${isMapExpanded ? styles.expanded : ''}`}>
            {/* Блок с изображением и информацией */}
            {!isMapExpanded && (
                <div className={styles.imageBlock}>
                    {activeLocation ? (
                        <>
                            <img
                                src={activeLocation.image}
                                alt={activeLocation.title}
                                className={styles.mainImage}
                            />
                            <div className={styles.overlay}>
                                <h2>{activeLocation.title}</h2>
                                <p>{activeLocation.description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <img
                                src="/img/krasnodar-route.jpg"
                                alt="Маршрут"
                                className={styles.mainImage}
                            />
                            <div className={styles.overlay}>
                                <h2>Даже лучше, чем в Дубаи</h2>
                                <p>Планируйте свой идеальный отпуск в Краснодарском крае</p>

                                <div className={styles.routeInfo}>
                                    <h3>Маршрут на квадрацикле</h3>
                                    <div className={styles.directions}>
                                        <span>↩ развернитесь</span>
                                        <span>50 м</span>
                                    </div>
                                    <button className={styles.routeButton}>
                                        Проложить маршрут
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Блок с картой */}
            <div className={`${styles.mapBlock} ${isMapExpanded ? styles.fullscreen : ''}`}>
                <button
                    className={styles.expandButton}
                    onClick={toggleMapSize}
                    aria-label={isMapExpanded ? "Свернуть карту" : "Развернуть карту"}
                >
                    {isMapExpanded ? '×' : '🗺'}
                </button>

                <MapContainer
                    center={[43.5852, 39.7203]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className={styles.leafletContainer}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {locations.map(location => (
                        <Marker
                            key={location.id}
                            position={location.position}
                            eventHandlers={{
                                click: () => setActiveLocation(location),
                            }}
                        >
                            <Popup>
                                <div className={styles.popupContent}>
                                    <h4>{location.title}</h4>
                                    <img
                                        src={location.image}
                                        alt={location.title}
                                        className={styles.popupImage}
                                    />
                                    <p>{location.description}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
};

export default MapComponent;