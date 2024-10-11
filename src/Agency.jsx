
import React, { useEffect, useState } from 'react';


function Agency(){

    const [loading, setLoading] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);
    const [activeVideo, setActiveVideo] = useState(0);

    useEffect(() => {
        // Iniciar el efecto de fade-in al cargar el componente
        const fadeInTimeout = setTimeout(() => {
            setLoading(true); // Comienza la carga
        }, 0);

        const intervals = [
            setTimeout(() => setActiveVideo(1), 0),    // El primer video aparece después de 0 segundos
            setTimeout(() => setActiveVideo(2), 0),   // El segundo video aparece después de 0 segundos
            setTimeout(() => setActiveVideo(3), 0),   // El tercer video aparece después de 0 segundos
            setTimeout(() => setActiveVideo(4), 0),   // El cuarto video aparece después de 0 segundos
            setTimeout(() => {
                setFadingOut(true); // Inicia el desvanecimiento después de 7 segundos
            }, 7000),  
            setTimeout(() => {
                setLoading(false); // Después de 9 segundos, se oculta el splash screen
            }, 9000)   
        ];

        return () => {
            clearTimeout(fadeInTimeout); // Limpiar temporizadores al desmontar el componente
            intervals.forEach(clearTimeout);
        };
    }, []);

    if (loading) {
        return (
            <div className={`splash-screen ${fadingOut ? 'fade-out' : 'fade-in'}`}>
                <div className="video-container">
                    <video
                        className={`splash-video ${activeVideo >= 1 ? 'active' : ''}`}
                        autoPlay loop muted
                    >
                        <source src="###" type="video/mp4" />
                    </video>
                    <video
                        className={`splash-video ${activeVideo >= 2 ? 'active' : ''}`}
                        autoPlay loop muted
                    >
                        <source src="##" type="video/mp4" />
                    </video>
                    <video
                        className={`splash-video ${activeVideo >= 3 ? 'active' : ''}`}
                        autoPlay loop muted
                    >
                        <source src="##" type="video/mp4" />
                    </video>
                    <video
                        className={`splash-video ${activeVideo >= 4 ? 'active' : ''}`}
                        autoPlay loop muted
                    >
                        <source src="##" type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Agencia de modelaje</h1>
            <img src="./assets/bird.avif" alt="" />  
        </div>
    );
}



export default Agency