import React from "react"
import '../../styles/Links.css';


class Links extends React.Component {

    render() {
        return (
            <div className = "link">
                <h3><a target="_blank" href= {this.props.product.link}>{this.props.product.title}</a></h3>
                <br/>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default Links;