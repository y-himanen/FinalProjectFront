import React from 'react';
import Note from './Note';

class NotesList extends React.Component {

    //selected week comes with props from week -component/path ?!?
    //for demo, selected week is 1
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            selectedWeek: 1
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8080/notes/' + this.state.selectedWeek;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({notes: response}))
    }

    render() {

        const weeknotes = this.state.notes.map(note =>
            <Note text={note.text} id={note.id} />
        )

        return(
            <div>
                {weeknotes}
            </div>
        )

    }
}

export default NotesList;