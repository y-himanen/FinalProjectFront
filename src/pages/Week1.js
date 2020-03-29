import React from "react";
import NotesList from "../components/Notes/NotesList";
import LinkList from "../components/Links/LinkList";
import AddNote from "../components/Notes/AddNote";
import Navi from "../Navi";
import LanguageSearch from "../components/Notes/LanguageSearch";

const Week1 = () => {
    return (
        <div>
            <Navi />
            <h1>Week 1</h1>
            <LanguageSearch />
            <NotesList />
            <AddNote />
            <LinkList/>
        </div>
    );
}

export default Week1;