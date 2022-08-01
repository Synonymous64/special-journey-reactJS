import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
export default class App extends Component {
  //* Class data member
  a = "by Prajwal :)";
  render() {
    return  (
      <>
      <NavBar/>
      <News pageSize={5}/>
      </>
    )
  }
}
