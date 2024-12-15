import React from 'react';
import './AboutUs.css';
import manager from '../../assets/image/find.png';
import director from '../../assets/image/morf.png';
import boss from '../../assets/image/pudge.png';
import kate from '../../assets/image/Ellipse 1.png';
import ahmed from '../../assets/image/Ellipse 2.png';
const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-header">
                <h1>Vitajte v jaskyni Zlá Diera</h1>
                <p>
                    Jednom z najfascinujúcejších prírodných pokladov Slovenska! Naša jaskyňa je miestom, kde sa prelína
                    história,
                    geológia a tajomné krásy podzemného sveta.
                </p>
            </div>

            <div className="about-us-section">
                <h2>Naša história</h2>
                <p>
                    Jaskyňa Zlá Diera bola objavená v roku [uveďte rok objavu] a odvtedy sa stala významnou súčasťou
                    regiónu. Po desaťročia sme
                    pracovali na jej sprístupnení verejnosti, pričom sme zachovali jej prirodzenú krásu a jedinečnosť.
                    Každý rok privítame tisíce
                    návštevníkov, ktorí prichádzajú objaviť jej tajomstvá.
                </p>
            </div>

            <div className="about-us-section">
                <h2>Čo ponúkame</h2>
                <ul>
                    <li><strong>Vedené prehliadky:</strong> Naši skúsení sprievodcovia vás prevedú po najkrajších
                        častiach jaskyne, pričom sa dozviete zaujímavosti o jej vzniku a geológii.
                    </li>
                    <li><strong>Virtuálna prehliadka:</strong> Pre tých, ktorí uprednostňujú pohodlie domova, ponúkame
                        jedinečný virtuálny zážitok, kde môžete jaskyňu preskúmať online.
                    </li>
                    <li><strong>Vzdelávacie programy:</strong> Pre školy a organizácie pripravujeme špeciálne prednášky
                        a vzdelávacie akcie.
                    </li>
                </ul>
            </div>

            <div className="about-us-section">
                <h2>Naše poslanie</h2>
                <p>
                    Našou misiou je chrániť a sprístupniť tento unikátny prírodný zázrak pre budúce generácie. Veríme,
                    že návšteva jaskyne Zlá Diera nie je len výletom, ale aj zážitkom, ktorý obohacuje a vzdeláva.
                </p>
            </div>

            <div className="about-us-team">
                <h2>Naša tím</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src={manager} alt="Manažér"/>
                        <p>Manažér</p>
                    </div>
                    <div className="team-member">
                        <img src={director} alt="Riaditeľ"/>
                        <p>Riaditeľ</p>
                    </div>
                    <div className="team-member">
                        <img src={boss} alt="BOSS"/>
                        <p>BOSS</p>
                    </div>
                </div>
            </div>

            <div className="reviews">
                <div className="review">
                    <div className="review-header">
                        <img src={kate} alt="Kate sk" className="review-avatar"/>
                        <div>
                            <h3>Kate sk</h3>
                            <p>pred 4 dňami</p>
                            <div className="review-stars">
                                ★★★★☆
                            </div>
                        </div>
                    </div>
                    <p className="review-text">
                        "Jaskyňa Zlá Diera je úžasné miesto plné prírodných krás. Sprievodca bol veľmi priateľský a
                        ochotný
                        odpovedať na všetky naše otázky. Deti boli nadšené z tých nádherných stalaktitov a stalagmitov.
                        Určite sa sem vrátime! Odporúčam každému, kto má rád prírodu a dobrodružstvo."
                    </p>
                </div>
                <div className="review">
                    <div className="review-header">
                        <img src={ahmed} alt="Armen Sargsyan" className="review-avatar"/>
                        <div>
                            <h3>Armen Sargsyan</h3>
                            <p>pred 6 dňami</p>
                            <div className="review-stars">
                                ★★★★★
                            </div>
                        </div>
                    </div>
                    <p className="review-text">
                        "Nezabudnuteľný zážitok! Prehliadka bola profesionálne vedená a dozvedeli sme sa množstvo
                        zaujímavostí
                        o histórii a formovaní jaskyne. Atmosféra v podzemí bola magická, najmä keď osvetlenie ukázalo
                        tie
                        najkrajšie časti. Ďakujeme celému tímu za skvelý zážitok!"
                    </p>
                </div>
            </div>

            <div className="about-us-contact">
                <h3>Máte otázky? Radi vám odpovieme!</h3>
                <p>Tešíme sa na vašu návštevu a veríme, že vás jaskyňa Zlá Diera očarí svojou krásou a tajomnosťou!</p>
            </div>
        </div>
    );
};

export default AboutUs;
