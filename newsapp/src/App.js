import "./App.css";
import React, { Component } from "react";
export default class App extends Component {
  //* Class data member
  a = "by Prajwal :)";
  render() {
    return <div>Hello! This is about Class-based component {this.a}</div>;
  }
}
