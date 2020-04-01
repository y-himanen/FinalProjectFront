import React from "react";
import NotesList from "../components/Notes/NotesList";
import LinkList from "../components/Links/LinkList";
import AddNote from "../components/Notes/AddNote";
import Navi from "../Navi";
import {Link} from "react-router-dom";

const Week2 = () => {
    const week = 2;
    return (
        <div>
            <Navi />
            <br/>

            <h1>Viikko / Week 2</h1>

            <p>
                Toisella viikolla syvensit osaamistasi Javan ja testaamisen osalta ja harjoittelit testivetoista kehittämistä.<br/>
                Tutustuit myös Maven -projekteihin.<br/><br/>

                Haluatko harjoitella tällä viikolla oppimiasi asioita? <Link to="/sammy2">Sammy</Link> näyttäisi olevan edelleen avun tarpeessa.<br/><br/>
            </p>
            <p>
                In the second week, you deepened your knowledge of Java and testing, and practiced test driven development.<br/>
                You were also introduced to Maven projects.<br/><br/>

                Want to practice what you learned this week? It seems like <Link to="/sammy2">Sammy</Link> could do with some more help.

            </p>
            <LinkList wk={week}/>
            <AddNote wk={week}/>
            <NotesList wk={week}/>

        </div>
    );
}

export default Week2;