import React, { useState, useEffect } from 'react';

const ImageBackgroundPage = ({ children }) => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('');

    useEffect(() => {
        fetchRandomNatureImage();
    }, []);

    const fetchRandomNatureImage = async () => {
        const seed = Math.random(); // Generate a random seed
        const width = 1920; // Width of the image
        const height = 1080; // Height of the image
        const endpoint = `https://picsum.photos/seed/${seed}/${width}/${height}`;

        try {
            const response = await fetch(endpoint);
            setBackgroundImageUrl(response.url);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };

    const handleButtonClick = () => {
        fetchRandomNatureImage(); // Fetch a new random nature image
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                position: 'fixed',
                zIndex: -1,
            }}
        >
            {children}
            <button onClick={handleButtonClick} className="btn btn-primary" style={{ position: 'fixed', top: 20, right: 20 }}>Change Background</button>
        </div>
    );
};

export default ImageBackgroundPage;
