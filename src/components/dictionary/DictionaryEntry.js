import React, {Component} from "react";

class DictionaryEntry extends Component {
    render() {
        return (
            <div>
                <h3> "{this.props.finnish}" (fi) = "{this.props.english}" (eng) </h3>
            </div>
        )
    }
}

export default DictionaryEntry;