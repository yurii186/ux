import React, { useState } from "react";
import "./Reservation.css";

const Reservation = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    // Функция для получения дней месяца
    const getMonthDays = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const days = [];

        // Добавляем дни месяца
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        // Добавляем пустые ячейки в начало массива, чтобы сдвинуть дни
        const leadingEmptyDays = firstDayOfMonth.getDay();
        for (let i = 0; i < leadingEmptyDays; i++) {
            days.unshift(null);
        }

        return days;
    };

    const handlePrevMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        setCurrentDate(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleReserve = () => {
        if (selectedDate) {
            // Сохраняем дату в localStorage
            localStorage.setItem('selectedDate', selectedDate.toISOString());
            // Изменяем хеш, чтобы перейти на страницу бронирования
            window.location.hash = "#booking";
        }
    };

    const days = getMonthDays(currentDate);
    const daysOfWeek = ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];
    const monthYear = `${currentDate.toLocaleString("sk-SK", { month: "long" })} ${currentDate.getFullYear()}`;

    return (
        <div className="reservation-page">
            <div className="calendar-container">
                <div className="month-year">{monthYear}</div>
                <div className="calendar-grid">
                    {daysOfWeek.map((day, index) => (
                        <div
                            key={index}
                            className={`calendar-day-header ${day === "Nedeľa" || day === "Sobota" ? "weekend" : "weekday"}`}
                        >
                            {day}
                        </div>
                    ))}
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`calendar-day ${day ? (day.getDay() === 0 || day.getDay() === 6 ? "weekend" : "weekday") : "empty"} ${
                                selectedDate && day && day.toDateString() === selectedDate.toDateString() ? "selected" : ""
                            }`}
                            onClick={() => day && handleDateClick(day)}
                        >
                            {day ? day.getDate() : ""}
                        </div>
                    ))}
                </div>
                <div className="nav-buttons">
                    <button className="nav-button" onClick={handlePrevMonth}>
                        Predchádzajúci mesiac
                    </button>
                    <button className="nav-button" onClick={handleNextMonth}>
                        Nasledujúci mesiac
                    </button>
                </div>
            </div>
            <div className="pricing-info">
                <h2>CENNÍK</h2>
                <ul>
                    <li>
                        <strong>Dospelí:</strong> 9 €
                    </li>
                    <li>
                        <strong>Deti (3–17 rokov):</strong> 5 €
                    </li>
                    <li>
                        <strong>Individuálny vstup:</strong> 20 €
                    </li>
                </ul>
                <p>
                    <strong>Poplatky:</strong> Fotografie a video zdarma
                </p>
            </div>
            <button
                className={`reserve-button ${selectedDate ? "active" : "disabled"}`}
                onClick={handleReserve}
                disabled={!selectedDate}
            >
                Rezervovať prehliadku
            </button>
        </div>
    );
};

export default Reservation;
