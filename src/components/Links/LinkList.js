import React from "react";
import Links from "./Links";

class LinkList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linklist: [],
            selectedWeek: props.wk
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        const url = "http://localhost:8080/api/links/" + this.state.selectedWeek;
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({linklist: response}))
            .catch((error)=> {
                console.log(error)
        })
    }

    render() {

        let linklist;

        if (this.state.linklist.length === 0) {
            linklist = 'Links are under construction.'
        } else {
            linklist = this.state.linklist.map((item) =>
                <Links key={item.id} product={item}/>)
        }


        return (
            <div className= 'linklist'>
                <h1>Hyödylliset linkit / Useful links:</h1>
                {linklist}
                <br/>
            </div>
        )
    }
}

export default LinkList;