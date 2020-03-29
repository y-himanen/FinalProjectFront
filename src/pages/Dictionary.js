import React from "react";
import "../styles/Dictionary.css"
import DictionarySearchResult from "../components/dictionary/DictionarySearchResult";
import Navi from "../Navi";

const Dictionary = (props) => {

    return (
        <div ClassName= 'Dictionary'>
            <Navi />
            <h1>Koodaussanakirja / Coding Dictionary</h1>
            <p>Mikä tämä on englanniksi?</p><input type="text" onClick={console.log('click')}/><button>Hae</button>
            <p>What's that in Finnish?</p><input type="text" onClick={console.log('click')}/><button>Search</button>
            <DictionarySearchResult />
        </div>
    );
}

export default Dictionary;