import React from "react";
import Links from "./Links";

class LinkList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linklist: []
        }
    }
    componentDidMount() {
        this.setState({loading: true})
        const url = "http://localhost:8080/api/links"
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({linklist: response}))
    }

    render() {
        const linklist = this.state.linklist.map((item) =>
            <Links key={item.id} product={item}/>)

        function handleClick() {
            console.log("I was clicked")
        }

        return (
            <div>
                <h2>Useful links:</h2>
                {linklist}
            </div>
        )
    }
}

export default LinkList;