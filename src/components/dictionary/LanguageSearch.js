import React from 'react';
import Wanted from './Wanted';

class LanguageSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            finnish: '',
            match: []
        };
        this.finnishSearchHandler = this.finnishSearchHandler.bind(this);
        this.finnishChangeHandler = this.finnishChangeHandler.bind(this)
    }

    finnishChangeHandler(event) {
        this.setState({finnish: event.target.value});
    }

    finnishSearchHandler(){
        const url = 'http://localhost:8080/api/dictionary/finnish/' + this.state.finnish;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({match: response}))
    }

    render() {
        let wanted = this.state.match.map(item =>
            <Wanted key={item.id} fin={item.finnish} eng={item.english} />
        );

        return (
            <div>
                <input type="text" value={this.state.finnish} onChange={this.finnishChangeHandler}/>
                <button onClick={this.finnishSearchHandler}>Search please</button>
                <br/>
                {wanted}
            </div>
        )
    }
}

export default LanguageSearch;