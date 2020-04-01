import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <br/>
        <h1>Academy Java Kurssikaveri / Study Buddy</h1>
            <p>Tervetuloa Academy:n Java Kurssikaveriin.<br />
                Täältä löydät kokoelman oppaita, "cheat sheetejä" ja helppotajuisia videoita kurssin aikana käsitellyistä asioista.<br />
                Voit myös lisätä omia muistiinpanojasi.<br />
                Mukavaa opiskelua!</p><br /><br />
            <p>Welcome to your Academy Java Study Buddy.<br />
                Here you'll find a collection of extra information on the material that you've been covering in the course, including guides, cheat sheets and easy to understand videos.<br />
                You can also add your own notes.<br />
                Happy studying!<br />
            </p>
            <br />
            <br />
            <p>
                <ul>
                    <li><Link to="/week1">Week 1</Link></li>
                    <li><Link to="/week2">Week 2</Link></li>
                    <li><Link to="/week3">Week 3</Link></li>
                    <li><Link to="/dictionary">Koodaussanakirja / Coding Dictionary</Link></li>
                </ul>
            </p>
        </div>
    );
}

export default Home;