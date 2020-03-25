import React from "react"

class Links extends React.Component {

    render() {
        return (
            <div>
                <h2><a href= {this.props.product.link}>{this.props.product.link}</a></h2>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default Links;