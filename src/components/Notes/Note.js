import React from 'react';
import '../../styles/notes.css';

class Note extends React.Component {

    render() {
        return (
            <div className="anote">
                <p>Note {this.props.id}: {this.props.text}</p>
            </div>
        )
    }
}

export default Note;