import React, { useEffect, useState, useRef } from 'react';

import splash1 from './assets/splash1.mp4';
import splash2 from './assets/splash2.mp4';
import splash3 from './assets/splash3.mp4';
import splash4 from './assets/splash4.mp4';
import PrincipalAgency from './PrincipalAgency';

function Agency() {
    const [loading, setLoading] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);
    const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const videos = [splash1, splash2, splash3, splash4];

    useEffect(() => {
        const isMobile = window.innerWidth < 768; // Verificar si el dispositivo es móvil

        if (isMobile) {
            // Si es móvil, seleccionar un video aleatorio
            const randomVideoIndex = Math.floor(Math.random() * videos.length);
            const randomVideo = videos[randomVideoIndex];

            const videoElement = document.createElement('video');
            videoElement.src = randomVideo;
            videoElement.muted = true;
            videoElement.play();

            const timeout = setTimeout(() => {
                videoElement.pause();
                videoElement.remove(); // Eliminar el elemento del DOM después de 10 segundos
                setFadingOut(true); // Iniciar el fade-out
                setLoading(false); // Finalizar el splash
            }, 10000); // 10 segundos

            return () => clearTimeout(timeout); // Limpiar timeout al desmontar
        } else {
            // Si no es móvil, seguir con la lógica de videos secuenciales
            const fadeInTimeout = setTimeout(() => {
                setLoading(true);
            }, 0);

            const intervals = [
                setTimeout(() => setActiveVideo(1), 0),
                setTimeout(() => {
                    if (videoRefs[0].current) videoRefs[0].current.pause();
                    setActiveVideo(2);
                }, 2000),
                setTimeout(() => {
                    if (videoRefs[1].current) videoRefs[1].current.pause();
                    setActiveVideo(3);
                }, 4500),
                setTimeout(() => {
                    if (videoRefs[2].current) videoRefs[2].current.pause();
                    setActiveVideo(4);
                }, 5500),
                setTimeout(() => {
                    if (videoRefs[3].current) videoRefs[3].current.pause();
                    setFadingOut(true);
                }, 8500),
                setTimeout(() => {
                    setLoading(false);
                }, 12000)
            ];

            return () => {
                clearTimeout(fadeInTimeout);
                intervals.forEach(clearTimeout); // Limpiar todos los temporizadores
            };
        }
    }, []);

    if (loading) {
        return (
            <div className={`splash-screen ${fadingOut ? 'fade-out' : 'fade-in'}`}>
                <div className="video-container">
                    <video
                        className={`splash-video ${activeVideo >= 1 ? 'active' : ''}`}
                        autoPlay loop muted
                        ref={videoRefs[0]}
                    >
                        <source src={splash3} type="video/mp4" />
                    </video>
                    <video
                        className={`splash-video ${activeVideo >= 2 ? 'active' : ''}`}
                        autoPlay loop muted
                        ref={videoRefs[1]}
                    >
                        <source src={splash2} type="video/mp4" />
                    </video>
                    <video
                        className={`splash-video ${activeVideo >= 3 ? 'active' : ''}`}
                        autoPlay loop muted
                        ref={videoRefs[2]}
                    >
                        <source src={splash4} type="video/mp4" />
                    </video>
                    <video
                        className={`splash-video ${activeVideo >= 4 ? 'active' : ''}`}
                        autoPlay loop muted
                        ref={videoRefs[3]}
                    >
                        <source src={splash1} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }

    return <PrincipalAgency />;
}

export default Agency;
