import React, {Component} from "react";
import DictionaryEntry from "./DictionaryEntry";

class DictionarySearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dictionary: []
        }
    }
 //
 //     finnishSearchHandler = async (e) => {
 //        const searchResult = e.target.elements.searchResult.value;
 //        e.preventDefault();
 //        const apiCall = await fetch("http://localhost:8080/api/dictionary/finnish/" + searchResult)
 //        const data = await apiCall.json();
 //        this.setState({dictionary: data});
 //
 // }

    componentDidMount() {
        this.setState({loading: true})
        const url = "http://localhost:8080/api/dictionary"
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({dictionary: response}))
            .catch((error)=> {
                console.log(error)
            })
    }

    render() {
        const dictionaryview = this.state.dictionary.map((dictionaryentry =>
        <DictionaryEntry id={dictionaryentry.id} finnish={dictionaryentry.finnish} english={dictionaryentry.english}/>))

        return (
            <div>
                {dictionaryview}
            </div>
        )
    }
}

export default DictionarySearchResult;