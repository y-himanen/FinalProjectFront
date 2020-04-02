import React, {Component} from "react";
import DictionaryEntry from "./DictionaryEntry";

class DictionarySearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wanted: '',
            match: []
        };
        this.searchHandler = this.searchHandler.bind(this);
        this.finnishChangeHandler = this.finnishChangeHandler.bind(this)
        this.englishChangeHandler = this.englishChangeHandler.bind(this)
    }

/*    componentDidMount() {
        this.setState({loading: true})
        const url = "http://localhost:8080/api/dictionary"
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({match: response}))
            .catch((error)=> {
                console.log(error)
            })
    }*/

    finnishChangeHandler(event) {
        this.setState({wanted: '/finnish/' + event.target.value});
    }

    englishChangeHandler(event) {
        this.setState({wanted: '/english/' + event.target.value});
    }

    searchHandler(){
        const url = 'http://localhost:8080/api/dictionary' + this.state.wanted;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({match: response}))
    }

    render() {

        const searchresult = this.state.match.map(dictionaryentry =>
        <DictionaryEntry key={dictionaryentry.id} finnish={dictionaryentry.finnish} english={dictionaryentry.english}/>);

        return (
            <div className="dict">
                <link rel="stylesheet" href="Dictionary.css"></link>
                <p>Mikä tämä on englanniksi? <input type="text" onChange={this.finnishChangeHandler}/>
                <button onClick={this.searchHandler}>Hae</button></p>
                <br/>
                <br/>
                <p>What's that in Finnish? <input type="text" onChange={this.englishChangeHandler}/>
                    <button onClick={this.searchHandler}>Search</button></p>
                <br/>
                <br/>
                {searchresult}
            </div>
        )
    }
}

export default DictionarySearchResult;