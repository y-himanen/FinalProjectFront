import React from 'react';
import '../../styles/notes.css';
import DeleteNote from "./DeleteNote";

class Note extends React.Component {

    render() {
        return (
            <div className="anote">
                <p>Note {this.props.id}: {this.props.text}</p>
                <DeleteNote id={this.props.id}/>
            </div>
        )
    }
}

export default Note;