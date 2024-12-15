import React, { useState, useEffect, useRef } from 'react';
import route1 from '../../assets/image/route1.jpeg';
import route2 from '../../assets/image/route2.jpg';
import route3 from '../../assets/image/route3.jpeg';
import route4 from '../../assets/image/route4.jpg';
import mapImage from '../../assets/image/map-image.png';
import "./VirtualTour.css";
import handImage from '../../assets/image/hand-icon.png';

const VirtualTour = () => {
    const [activeCircle, setActiveCircle] = useState(null);
    const [points, setPoints] = useState([]);
    const mapImageRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // Реф для инфобокса, чтобы проверить его позиционирование после рендера
    const infoBoxRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const basePoints = [
        { id: 1, x: 0.34, y: 0.21, text: 'Stručný a presný popis trasy, jej kladov a rizík, ako aj zaujímavosti', image: route1 },
        { id: 2, x: 0.50, y: 0.47, text: 'Stručný a presný popis trasy, jej kladov a rizík, ako aj zaujímavosti', image: route2 },
        { id: 3, x: 0.345, y: 0.53, text: 'Stručný a presný popis trasy, jej kladov a rizík, ako aj zaujímavosti', image: route3 },
        { id: 4, x: 0.662, y: 0.43, text: 'Stručný a presný popis trasy, jej kladov a rizík, ako aj zaujímavosti', image: route4 },
    ];

    const recalculatePoints = () => {
        if (mapImageRef.current) {
            const rect = mapImageRef.current.getBoundingClientRect();
            const mapWidth = rect.width;
            const mapHeight = rect.height;

            const recalculatedPoints = basePoints.map(point => ({
                ...point,
                x: point.x * mapWidth,
                y: point.y * mapHeight,
            }));

            setPoints(recalculatedPoints);
        }
    };

    useEffect(() => {
        const handleLoad = () => {
            recalculatePoints();
            window.addEventListener('resize', recalculatePoints);
        };

        if (mapImageRef.current) {
            if (mapImageRef.current.complete) {
                handleLoad();
            } else {
                mapImageRef.current.addEventListener('load', handleLoad);
            }
        }

        return () => {
            window.removeEventListener('resize', recalculatePoints);
            if (mapImageRef.current) {
                mapImageRef.current.removeEventListener('load', handleLoad);
            }
        };
    }, []);

    const handleMouseEnter = (id) => {
        if (!isMobile) {
            setActiveCircle(id);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setActiveCircle(null);
        }
    };

    const handleClickCircle = (id) => {
        if (isMobile) {
            // Если на телефоне, открываем или закрываем инфобокс по клику
            setActiveCircle(activeCircle === id ? null : id);
        }
    };

    const activePoint = points.find(p => p.id === activeCircle);

    // Эффект, который срабатывает при изменении activeCircle
    // и корректирует позицию инфобокса, если он выходит за пределы экрана.
    useEffect(() => {
        if (activeCircle && infoBoxRef.current) {
            const infoBoxRect = infoBoxRef.current.getBoundingClientRect();
            let newLeft = infoBoxRect.left;
            let newTop = infoBoxRect.top;

            const offsetX = (infoBoxRect.right > window.innerWidth) ? (infoBoxRect.right - window.innerWidth + 20) : 0;
            const offsetY = (infoBoxRect.bottom > window.innerHeight) ? (infoBoxRect.bottom - window.innerHeight + 20) : 0;

            if (offsetX > 0 || offsetY > 0) {
                // Корректируем стили, смещая инфобокс в видимую область
                const infoBoxElement = infoBoxRef.current;

                // Вычисляем новые координаты
                const newLeftStyle = (parseFloat(infoBoxElement.style.left) - offsetX) + 'px';
                const newTopStyle = (parseFloat(infoBoxElement.style.top) - offsetY) + 'px';

                infoBoxElement.style.left = newLeftStyle;
                infoBoxElement.style.top = newTopStyle;
            }
        }
    }, [activeCircle]);

    // Обработчик клика по контейнеру. Если кликнут не по кругу и не по инфобоксу на мобильном - закрываем инфобокс.
    const handleContainerClick = (e) => {
        if (!isMobile) return; // На десктопе не закрываем по клику вне
        // Проверяем, кликнут ли по кругу или по инфобоксу
        const circleClicked = e.target.closest('.circle');
        const infoBoxClicked = e.target.closest('.info-box');

        if (!circleClicked && !infoBoxClicked) {
            setActiveCircle(null);
        }
    };

    const navigateTo = (hash) => {
        window.location.hash = hash;
    };

    return (
        <div className="virtual-tour" onClick={handleContainerClick}>
            <div className="map-container">
                <img src={mapImage} alt="Map" ref={mapImageRef} className="map-image"/>
                {points.map(point => (
                    <div
                        key={point.id}
                        className="circle"
                        style={{
                            top: `${point.y}px`,
                            left: `${point.x}px`,
                        }}
                        onMouseEnter={() => handleMouseEnter(point.id)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClickCircle(point.id)}
                    >
                        <img src={handImage} alt="Hand Icon" />
                    </div>
                ))}

                {activeCircle && activePoint && (
                    <div
                        className="info-box"
                        ref={infoBoxRef}
                        style={{
                            top: `${activePoint.y}px`,
                            left: `${activePoint.x + 20}px`,
                        }}
                        onMouseEnter={() => !isMobile && setActiveCircle(activeCircle)}
                        onMouseLeave={() => !isMobile && setActiveCircle(null)}
                    >
                        <div className="info-image">
                            <img
                                src={activePoint.image}
                                alt="Route Info"
                            />
                        </div>
                        <div className="info-text">
                            <p>{activePoint.text}</p>
                        </div>
                        <div className="info-buttons">
                            <button className="reserve-button1" onClick={(e) => {
                                e.stopPropagation();
                                navigateTo('reservation');
                            }}>Rezervácia prehliadky
                            </button>
                            <button className="contact-button1" onClick={(e) => {
                                e.stopPropagation();
                                navigateTo('about');
                            }}>Kontaktovať
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="description">
                Tu nájdete podrobné informácie o každej trase
            </div>
        </div>
    );
};

export default VirtualTour;
