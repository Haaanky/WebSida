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
    this.handlerClick = this.handlerClick.bind(this);
    this.state = { value: "", firstArray: [] };
  }

  handlerChange(event) {
    this.setState({ value: event.target.value });
  }
  handlerClick(event) {
    this.state.firstArray.push(<li>{this.state.value}</li>)
    this.setState()
    
  }

  render() {
    return (
      <div className="Main-page">
        <Header name="Malin" />
        <Input
          type="text"
          value={this.state.value}
          handlerChange={this.handlerChange}
        />
        <List firstArray={this.state.firstArray} />
        <Button handlerClick ={this.handlerClick} />
      </div>
    );
  }
}

export default App;
