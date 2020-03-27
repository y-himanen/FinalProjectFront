import React from "react";
import "../styles/Dictionary.css"
import DictionarySearchResult from "../components/dictionary/DictionarySearchResult";

const Dictionary = (props) => {
    return (
        <div>
            <h1>Koodaussanakirja / Coding Dictionary</h1>
            <p>Mikä tämä on englanniksi?</p><input type="text" onClick={props.finnishSearchHandler}/><button>Hae</button>
            <p>What's that in Finnish?</p><input type="text"/><button>Search</button>
            <DictionarySearchResult />
        </div>
    );
}

export default Dictionary;