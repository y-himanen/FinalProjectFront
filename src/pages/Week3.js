import React from "react";
import NotesList from "../components/Notes/NotesList";
import LinkList from "../components/Links/LinkList";
import AddNote from "../components/Notes/AddNote";
import Navi from "../Navi";

const Week3 = () => {
    const week = 3;
    return (
        <div>
            <Navi />
            <br/>

            <h1>Viikko / Week 3</h1><br/>

            <p>Under construction...</p><br /><br />

            <LinkList wk={week}/>
            <AddNote wk={week}/>
            <NotesList wk={week}/>

        </div>
    );
}

export default Week3;