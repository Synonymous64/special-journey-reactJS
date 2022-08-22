import "./App.css";
// RCC
import React, { useState }from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () =>  {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  //* Class data member
  const a = "by Prajwal :)";
  
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  key="general"
                  pageSize={10}
                  country="in"
                  category="general"
                  apiKey={apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={10}
                  country="in"
                  category="entertainment"
                  apiKey={apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  pageSize={10}
                  country="in"
                  category="business"
                  apiKey={apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  pageSize={10}
                  country="in"
                  category="health"
                  apiKey={apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  pageSize={10}
                  country="in"
                  category="science"
                  apiKey={apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  pageSize={10}
                  country="in"
                  category="sports"
                  apiKey={apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  key="technology"
                  pageSize={10}
                  country="in"
                  category="technology"
                  apiKey={apiKey}
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
export default App;