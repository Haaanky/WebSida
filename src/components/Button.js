import React, {Component} from "react"

class Button extends Component {
    render() {
        return(
        <button className="button" onClick={this.props.handlerClick}>Jag är en knapp</button>

        )
    }
}

export default Button;
