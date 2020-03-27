import React from 'react';
import '../../styles/notes.css';

class Note extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    async handleDelete(event){
        const url = 'http://localhost:8080/notes/' + this.props.id;
        await fetch(url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"}
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))

        document.location.reload();
    }

    render() {
        return (
            <div className="anote">
                <p>Note {this.props.id}: {this.props.text}</p>
                <button onClick={this.handleDelete}>x</button>
            </div>
        )
    }
}

export default Note;