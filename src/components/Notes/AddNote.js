import React from 'react';

class AddNote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            selectedWeek: props.wk
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleSubmit(event) {
        console.log(JSON.stringify({text: this.state.text, week: this.state.selectedWeek}))
        const url = 'http://localhost:8080/notes'
        fetch(url, {
            method:"POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({text: this.state.text, week: this.state.selectedWeek})
            })
            .then(response => {
                if (response.status === 200) {
                    console.log("note added successfully");
                } else {
                    console.log("error adding a note");
                }
            });
        console.log("adding a note ok");
        this.setState({text: ''});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return(
            <flexbox className={"notelist"}>
                <form>
                    Add a note (max 100 characters): <input type="text" value={this.state.text} onChange={this.handleChangeText} maxLength="100" />
                    <button className="addnote" onClick={this.handleSubmit}>+</button>

                </form>
            </flexbox>
        )
    }
}

export default AddNote;