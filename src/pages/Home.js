import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <br/>
        <h1>Academy Java Kurssikaveri / Study Buddy</h1>
            <p>Tervetuloa Academy:n Java Kurssikaveriin.<br />
                Täältä löydät hyödyllisiä linkkejä ja lisää tietoa kurssin aikana käsitellyistä asioista.<br />
                Voit myös lisätä omia muistiinpanojasi.<br />
                Mukavaa opiskelua!</p><br /><br />
            <p>Welcome to your Academy Java Study Buddy.<br />
                Here you'll find useful links and extra information on the material that you've been covering in the course.<br />
                You can also add your own notes.<br />
                Happy studying!<br />
            </p>
            <br />
            <br />
            <p>
                <ul>
                    <li><Link to="/week1">Week 1</Link></li>
                    <li><Link to="/week2">Week 2</Link></li>
                    <li><Link to="/dictionary">Koodaussanakirja / Coding Dictionary</Link></li>
                </ul>
            </p>
        </div>
    );
}

export default Home;