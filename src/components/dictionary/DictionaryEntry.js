import React, {Component} from "react";

class DictionaryEntry extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.finnish}</h3><h3>{this.props.english}</h3>
            </div>
        )
    }
}

export default DictionaryEntry;