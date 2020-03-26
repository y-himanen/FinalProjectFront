import React, {Component} from 'react';

class DeleteNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destroyNote: this.props.id
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event){
        const url = 'http://localhost:8080/notes/' + this.state.destroyNote;
        fetch(url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json"}
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <button onClick={this.handleDelete}>x</button>
            </div>
        )
    }
}
export default DeleteNote;