import React from "react";
import "./MainContent.css";
import image1 from '../../assets/image/image1.png';
import image2 from '../../assets/image/image2.png';
import image3 from '../../assets/image/image3.png';

const MainContent = () => {
    return (
        <div className="main-content">
            {/* Существующие разделы */}
            <section className="welcome-section">
                <div className="welcome-text">
                    <h1>Vítame vás v jaskyni Zlá Diera!</h1>
                    <p>
                        Preskúmajte krásy jedinečných podzemných útvarov, ktoré vás očaria
                        svojou krásou a históriou. Rezervujte si svoju návštevu ešte dnes a
                        zažite nezabudnuteľné dobrodružstvo!
                    </p>
                </div>
                <div className="info">
                    <p>
                        <strong>Otvorené denne</strong>
                        <br />
                        od <strong>9:00</strong> do <strong>18:00</strong>
                    </p>
                    <p>
                        Nájdete nás na adrese:
                        <br />
                        <strong>Hlavná ulica 123, Zlá Diera.</strong>
                    </p>
                </div>
            </section>

            <section className="image-section">
                <img
                    src={image1}
                    alt="Zlá Diera"
                    className="main-image"
                />
            </section>

            <section className="about-section">
                <h2>Čo je Zla Diera?</h2>
                <p>
                    Zlá Diera je fascinujúca jaskyňa nachádzajúca sa na východe Slovenska,
                    známa svojimi úzkymi chodbami, impozantnými kvapľovými útvarmi a
                    bohatou históriou. Pre návštevníkov ponúka bezpečné trasy, ktoré umožňujú
                    objaviť prírodné krásy jaskyne a pochopiť geologické procesy, ktoré ju
                    formovali. Je to ideálne miesto pre milovníkov prírody, rodiny s deťmi a
                    všetkých, ktorí chcú zažiť dobrodružstvo v podzemí.
                </p>
                <div className="about-image-section">
                    <img
                        src={image2}
                        alt="Čo je Zla Diera?"
                        className="about-image"
                    />
                </div>
            </section>

            {/* Новый раздел "História jaskyne Zlá Diera" */}
            <section className="history-section">
                <h2>História jaskyne Zlá Diera</h2>
                <p>
                    Jaskyňa Zlá Diera, nachádzajúca sa v blízkosti obce Lipovce na východnom
                    Slovensku, bola objavená miestnymi obyvateľmi a postupne sa stala známou ako
                    unikátne miesto s krásnymi kvapľovými útvarmi a úzkymi chodbami. Už po
                    stáročia bola považovaná za tajomné miesto, ktoré miestni ľudia obchádzali kvôli
                    rozprávkam o duchoch a mýtoch. Až v 20. storočí sa začali vykonávať prvé
                    výskumy, ktoré odhalili geologickú hodnotu a históriu jaskyne.
                </p>
                <p>
                    Odtvtedy sa Zlá Diera stala obľúbeným cieľom pre turistov a dobrodruhov. S
                    vylepšenými bezpečnostnými opatreniami a sprievodcami, ktorí poskytujú
                    detailné informácie o jej prírodných útvaroch a procesoch, môžu návštevníci zažiť
                    jedinečný pohľad do podzemného sveta.
                </p>
                <div className="history-image-section">
                    <img
                        src={image3}
                        alt="História jaskyne Zlá Diera"
                        className="history-image"
                    />
                </div>
            </section>
        </div>
    );
};

export default MainContent;
