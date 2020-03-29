import React from 'react';
import Wanted from './Wanted';

class NoteSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            week: '',
            weekNotes: []
        };
        this.weekSearchHandler = this.weekSearchHandler.bind(this);
        this.weekChangeHandler = this.weekChangeHandler.bind(this)
    }

    weekChangeHandler(event) {
        this.setState({week: event.target.value});
    }

    weekSearchHandler(){
        const url = 'http://localhost:8080/api/dictionary/finnish/' + this.state.week;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({weekNotes: response}))
    }

/*    componentDidMount() {
        const url = 'http://localhost:8080/notes/' + this.state.week;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({weekNotes: response}))
    }*/

    render() {

        let wanted = this.state.weekNotes.map(note =>
            <Wanted key={note.id} fin={note.finnish} eng={note.english} />
        );

        return (
            <div>
                <input type="text" value={this.state.week} onChange={this.weekChangeHandler}/>
                <button onClick={this.weekSearchHandler}>Find</button>
                <br/>
                {wanted}
            </div>
        )
    }
}

export default NoteSearch;