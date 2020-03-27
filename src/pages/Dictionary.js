import React from "react";
import DictionarySearchResult from "../components/dictionary/DictionarySearchResult";

const Dictionary = () => {
    return (
        <div>
            <h1>Koodaussanakirja / Coding Dictionary</h1>
            <p>Mikä tämä on englanniksi?</p><input type="text"/><button>Hae</button>
            <p>What's that in Finnish?</p><input type="text"/><button>Search</button>
            <DictionarySearchResult />
        </div>
    );
}

export default Dictionary;