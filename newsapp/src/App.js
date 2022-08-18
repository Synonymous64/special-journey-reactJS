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
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
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
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={10}
                  country="in"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={10}
                  country="in"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={10}
                  country="in"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={10}
                  country="in"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={10}
                  country="in"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={10}
                  country="in"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={10}
                  country="in"
                  category="technology"
                  apiKey={this.apiKey}
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
