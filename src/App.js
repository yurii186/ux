import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import VirtualTour from "./components/VirtualTour/VirtualTour";
import Reservation from "./components/Reservation/Reservation";
import AboutUs from "./components/AboutUs/AboutUs";
import BooKingPage from "./components/BookingPage/BookingPage"
import "./components/Header/Header.css";

function App() {
    const getCurrentSectionFromHash = () => {
        const hash = window.location.hash;
        return hash ? hash.substring(1) : 'info'; // 'info' по умолчанию
    };

    const [currentSection, setCurrentSection] = useState(getCurrentSectionFromHash);

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentSection(getCurrentSectionFromHash());
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        // Устанавливаем или убираем overflow: hidden
        if (currentSection === 'virtual') {
            document.body.style.overflow = 'hidden'; // Запрещаем прокрутку
        } else {
            document.body.style.overflow = ''; // Возвращаем прокрутку
        }

        // Очистка при размонтировании
        return () => {
            document.body.style.overflow = ''; // Возвращаем прокрутку при выходе из приложения
        };
    }, [currentSection]);

    let content = null;

    if (currentSection === 'info') {
        content = <MainContent />;
    } else if (currentSection === 'virtual') {
        content = <VirtualTour />;
    } else if (currentSection === 'reservation') {
        content = <Reservation />;
    } else if (currentSection === 'about') {
        content = <AboutUs />;
    } else if (currentSection === 'booking'){
        content = <BooKingPage />;
    } else {
        // Если неизвестный хеш, показываем info
        content = <MainContent />;
    }

    return (
        <div>
            <Header />
            {content}
        </div>
    );
}

export default App;
