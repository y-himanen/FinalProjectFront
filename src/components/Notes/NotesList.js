import React from 'react';
import Note from './Note';
import '../../styles/notes.css';
import '../../styles/Links.css';

class NotesList extends React.Component {

    //selected week is hardcoded 1 for now
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            selectedWeek: props.wk
        }
    }

    componentDidMount() {
        console.log(this.selectedWeek)
        const url = 'http://localhost:8080/notes/' + this.state.selectedWeek;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({notes: response}))
    }

    render() {
        let weeknotes;

        if (this.state.notes.length === 0) {
            weeknotes = 'No notes for this week.'
        } else {
            weeknotes = this.state.notes.map(note =>
                <Note key={note.id} text={note.text} id={note.id} />
            )
        }

        return(
            <div className="notelist">
                <br/>
                <h2>Muistinpanot / Notes:</h2>
                {weeknotes}
            </div>
        )

    }
}

export default NotesList;