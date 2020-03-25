import React from 'react';

class Note extends React.Component {

    render() {
        return (
            <div className="anote">
                <h3>Note {this.props.id}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Note;