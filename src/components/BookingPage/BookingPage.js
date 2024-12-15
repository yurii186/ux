import React, { useState, useEffect } from 'react';
import "./BookingPage.css";

const BookingPage = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [individual, setIndividual] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');

    useEffect(() => {
        const storedDate = localStorage.getItem('selectedDate');
        if (storedDate) {
            setSelectedDate(new Date(storedDate));
        }
    }, []);

    const adultPrice = 9;
    const childPrice = 5;
    const individualPrice = 20;

    const totalPrice = individual
        ? individualPrice
        : (adults * adultPrice) + (children * childPrice);

    const handleSubmit = () => {
        if (!selectedDate) return;
        // Вместо сразу перехода на #info, показываем модальное окно оплаты
        setShowPaymentModal(true);
    };

    const handleCancel = () => {
        window.location.hash = "#reservation";
    };

    const handleCloseModal = () => {
        setShowPaymentModal(false);
    };

    const handlePay = () => {
        // Здесь можно добавить логику отправки платежных данных
        alert(`Platba úspešná! Celková cena: ${totalPrice} €`);
        window.location.hash = "#info";
    };

    if (!selectedDate) {
        return (
            <div className="booking-page">
                <h1>Nebol vybratý dátum</h1>
                <button onClick={() => window.location.hash = "#reservation"}>Späť</button>
            </div>
        );
    }

    return (
        <div className="booking-page">
            <h1>Výber počtu osôb</h1>
            <p>Vybraný dátum: {selectedDate.toLocaleDateString("sk-SK")}</p>

            <div className="form-group">
                <label>Dospelí (9 € za osobu):</label>
                <input
                    type="number"
                    min="0"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    disabled={individual}
                />
            </div>

            <div className="form-group">
                <label>Deti (3–17 rokov, 5 € za osobu):</label>
                <input
                    type="number"
                    min="0"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    disabled={individual}
                />
            </div>

            <div className="form-group">
                <label>
                    Individuálny vstup (20 €):{" "}
                    <input
                        type="checkbox"
                        checked={individual}
                        onChange={(e) => {
                            setIndividual(e.target.checked);
                            if (e.target.checked) {
                                setAdults(0);
                                setChildren(0);
                            }
                        }}
                    />
                </label>
            </div>

            <h2>Celková cena: {totalPrice} €</h2>

            <div className="button-group">
                <button className="confirm-button" onClick={handleSubmit}>
                    Potvrdiť rezerváciu
                </button>
                <button className="cancel-button" onClick={handleCancel}>
                    Späť
                </button>
            </div>

            {showPaymentModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <h2>Platba</h2>
                        <p>Celková cena: {totalPrice} €</p>
                        <div className="form-group">
                            <label>Číslo karty:</label>
                            <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                placeholder="1234 5678 9012 3456"
                            />
                        </div>
                        <div className="form-group">
                            <label>Dátum expirácie (MM/YY):</label>
                            <input
                                type="text"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                placeholder="MM/YY"
                            />
                        </div>
                        <div className="form-group">
                            <label>CVC:</label>
                            <input
                                type="text"
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                placeholder="CVC"
                            />
                        </div>
                        <button className="pay-button" onClick={handlePay}>Zaplatit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
