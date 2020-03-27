import React from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            selectedWeek: 1
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
        //is it necessary to reset??
        this.setState({text: ''});
    }

    handleChangeText(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return(
            <div className={"notelist"}>
                <form>
                    Add a note here: <input type="text" value={this.state.text} onChange={this.handleChangeText}/>
                    <button onClick={this.handleSubmit}>+</button>

                </form>
            </div>
        )
    }
}

export default AddNote;