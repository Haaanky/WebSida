import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Input from "./Input";
import List from "./List";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = { value: "", firstArray: [] };
  }

  handlerChange(event) {
    this.setState({ value: event.target.value });
  }
  handlerClick(event) {
    this.setState({

      //  firstArray.push() 

      })
  }

  render() {
    return (
      <>
        <Header name="Malin" />
        <Input
          type="text"
          value={this.state.value}
          handlerChange={this.handlerChange}
        />
        <List firstArray={this.state.firstArray} />
        <Button />
      </>
    );
  }
}

export default App;
