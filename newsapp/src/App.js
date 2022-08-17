import "./App.css";
// RCC
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0,
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }
  //* Class data member
  a = "by Prajwal :)";
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  pageSize={10}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  pageSize={10}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  pageSize={10}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress} 
                  key="health"
                  pageSize={10}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  pageSize={10}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress} 
                  key="sports"
                  pageSize={10}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  pageSize={10}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* <NavBar /> */}
        {/* <News setProgress={setProgress}  pageSize={10} country="in" category="science" /> */}
      </>
    );
  }
}
