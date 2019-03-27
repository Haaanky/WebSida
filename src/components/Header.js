import React, { Component } from "react";

class Header extends Component {
    render () {
        return(
            <header className="Header-class">
            <div>
                <h1>Hej</h1>
                <p>{this.props.name}</p>
            </div>
            </header>
        )
    }
}

export default Header;