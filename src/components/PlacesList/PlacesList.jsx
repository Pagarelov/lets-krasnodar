import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlacesList = () => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/places/');
                setPlaces(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching places:', error);
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {places.map(place => (
                <div key={place.id}>
                    <h2>{place.name}</h2>
                    <p>{place.description}</p>
                    <p>Coordinates: {place.latitude}, {place.longitude}</p>
                    {place.photos.map(photo => (
                        <div key={photo.id}>
                            <img
                                src="http://localhost:8000${photo.image}"
                                    alt={photo.caption || place.name}
                                    style={{ maxWidth: '300px' }}
                                    />
                                {photo.caption && <p>{photo.caption}</p>}
                        </div>
                        ))}
                </div>
            ))}
        </div>
    );
};

export default PlacesList;