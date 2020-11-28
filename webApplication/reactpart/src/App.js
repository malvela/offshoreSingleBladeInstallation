import React from 'react';
import logo from './bik-logo.png';
import bild1 from './bild1.png';
import bild2 from './bild2.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="header-nav">
                <img src={logo} alt="Logo"/>
                <ul>
                    <li><a href="http://127.0.0.1:8000/">Startseite</a></li>
                    <li><a href="http://127.0.0.1:8000/">Wissenschaftlicher Hintergrund</a></li>
                    <li><a href="http://127.0.0.1:8000/">Impressum</a></li>
                </ul>
            </nav>
            <div className="center-column">
                <div className="header-row">
                    <span>Erkennung von Zusammenhängen in den Daten aus Einzelblattmontagen</span>
                </div>
            </div>
            <br/>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-3">

                        <p className="Ueberschrift">Projektspezifische Motivation</p>

                        <p className="normalText">
                            Offshore Wind liefert bereits heute einen substantiellen Teil des Energiemixes. Um die
                            Installationskosten weiter zu senken, soll insbesondere der Installationsvorgang verbessert
                            werden.
                            Die Installation der Blätter stellt dabei die größte Herausforderung dar. Relativbewegungen
                            zwischen Gondel und Blattwurzel erschweren die Blattmontage. Überschreitet die
                            Relativbewegung einen gewissen Schwellwert, ist keine Installation mehr möglich und es kommt
                            zu einer kostspieligen Verzögerung.
                            Basierend auf Messdaten, welche während der Installation eines Windparks in der Nordsee
                            aufgezeichnet wurden, sollen mittels maschineller Lernenmethoden Korrelationen zwischen
                            Umweltgrößen, wie bspw. der Windgeschwindigkeit, und Beschleunigungen von Turm, Gondel und
                            Blatt erkannt werden.
                            In einem Softwaretechnikprojekt soll eine Web-App entwickelt werden, die, basierend auf
                            aufgezeichneten Daten, Zusammenhängen ausgibt, sodass anschließend Ingenieure diese
                            Ergebnisse für ein besseres Verständnis der Einzelblattmontage und ihre Umweltbedingungen
                            nutzen können.
                        </p>
                    </div>
                    <div className="col-3">
                        <img src={bild1} alt="Offshore Windanlagen Errichterschiff"/>

                        <img src={bild2} alt="Offshore Windanlage Einzelblattmontage"/>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default App;
