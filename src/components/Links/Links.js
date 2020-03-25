import React from "react"
import '../../styles/Links.css';


class Links extends React.Component {

    render() {
        return (
            <div class = "link">
                <h3><a href= {this.props.product.link}>{this.props.product.title}</a></h3>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default Links;