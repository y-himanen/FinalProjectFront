import React from "react";
import NotesList from "../components/Notes/NotesList";
import LinkList from "../components/Links/LinkList";

const Week1 = () => {
    return (
        <div>
        <h1>Week 1</h1>
            <NotesList />
            <LinkList/>
        </div>
    );
}

export default Week1;