import React from "react";
import "../styles/Dictionary.css"
import DictionarySearchResult from "../components/dictionary/DictionarySearchResult";
import Navi from "../Navi";

const Dictionary = (props) => {

    return (
        <div ClassName= 'Dictionary'>
            <Navi />
            <h1>Koodaussanakirja / Coding Dictionary</h1>
            <DictionarySearchResult />
        </div>
    );
}

export default Dictionary;