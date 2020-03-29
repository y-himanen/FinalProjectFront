import React from "react";
import NotesList from "../components/Notes/NotesList";
import LinkList from "../components/Links/LinkList";
import AddNote from "../components/Notes/AddNote";
import Navi from "../Navi";

const Week1 = () => {
    return (
        <div>
            <Navi />
            <h1>Viikko / Week 1</h1>

            <p>Ensimmäisellä viikolla opit Javan peruskäyttöä, muun muassa virtojen ja säännöllisten lausekkeiden käytön sekä poikkeuksien käsittelyn.<br />
            Opit myös hieman hajautetusta version hallinnasta Gitin avulla.<br />
            Täältä löydät kokoelman hyödyllisiä oppaita, "cheat sheetejä" ja helppotajuisia videoita.<br />
            Voit lisätä omia muistiinpanojasi tai linkkejä sivun alaosaan.</p><br /><br />

            <p>In week 1 you learned the basics of using Java, including streams, regular expressions, and exception handling amongst other topics.<br/>
            You also learned a little about distributed version control using Git.<br/>
            Here you'll find a collection of useful guides, cheat sheets and easy to understand videos.<br/>
            You can add your own notes and/or links at the bottom of the page.</p>
            <LinkList/>
            <NotesList />
            <AddNote />

        </div>
    );
}

export default Week1;