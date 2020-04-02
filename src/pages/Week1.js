import React from "react";
import {Link} from 'react-router-dom';
import NotesList from "../components/Notes/NotesList";
import LinkList from "../components/Links/LinkList";
import AddNote from "../components/Notes/AddNote";
import Navi from "../Navi";

const Week1 = () => {
    const week = 1;
    return (
        <div>
            <Navi />
            <br/>

            <h1>Viikko / Week 1</h1>

            <p>
                    Ensimmäisellä viikolla opit Javan peruskäyttöä, muun muassa virtojen ja säännöllisten lausekkeiden käytön sekä poikkeuksien käsittelyn.<br/><br/>
                    Opit myös hieman hajautetusta version hallinnasta Gitin avulla.<br/><br/>
                    Harjoitellaan tällä viikolla opittuja asioita - Valmiina? Auta koodaamalla <Link to="/sammy1">Sammya</Link> hänen seikkailuissaan!<br/><br/><br/>
            </p>
            <p>
                    In week 1 you learned the basics of using Java, including streams, regular expressions, and exception handling amongst other topics.<br/><br/>
                    You also learned a little about distributed version control using Git.<br/><br/>
                    Ready to practice what you've learned this week? Hop on over <Link to="/sammy1">here</Link> to use coding to help Sammy on his adventures!
            </p>
            <LinkList wk={week}/>
            <AddNote wk={week}/>
            <NotesList wk={week}/>

        </div>
    );
}

export default Week1;