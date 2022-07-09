//! Only one tag can be written
//! It mandatory in JSX type that only one tag can co-exist in the syntax
//! This is called JSX Fragment
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { About } from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// let name = "Prajwal";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  //* Creating the alert useState
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light"); //* It Tells whether dark mode enabled or not
  const [textMode, settextMode] = useState("dark"); //* It Tells whether dark mode enabled or not
  const [checkText, setchecktextMode] = useState("Enable dark mode"); //* It Tells whether dark mode enabled or not
  const [btnMode, setbtnMode] = useState(false); //* It Tells whether dark mode enabled or not
  const [checkTextGreen, setchecktextGreenMode] = useState("Enable Green mode"); //* It Tells whether dark mode enabled or not
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      settextMode("light");
      setchecktextMode("Disable dark mode");
      document.body.style.backgroundColor = "black";
      showAlert(" Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark";
      setbtnMode("red");

      // setInterval(()=>{
      //   document.title = "TextUtils is amazing"
      // }, 2000)
      // setInterval(()=>{
      //   document.title = "Install TextUtils"
      // }, 1500)
    } else {
      setMode("light");
      settextMode("dark");
      setchecktextMode("Enable dark mode");
      document.title = "TextUtils - Light";
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
      setbtnMode("blue");

    }
  };
  const greenMode = () => {
    if (mode !== "green") {
      setMode("green");
      settextMode("grey");
      setchecktextGreenMode("Disable Green mode");
      document.body.style.backgroundColor = "green";
      setbtnMode("red");
      document.title = "TextUtils - Green";
      showAlert(" Green mode has been enabled", "success");
    } else {
      setchecktextGreenMode("Enable Green mode");
      toggleMode();
      setbtnMode("");
    }
  };
  return (
    // *This are props which mentioned inside the Navbar like title and aboutText
    // * Whereas the Navbar is an Component
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/about"
            element={
              <>
                <Navbar
                  title="TextUtils"
                  aboutText="About"
                  mode={mode}
                  toggleMode={toggleMode}
                  myText={textMode}
                  stateMent={checkText}
                  greenMode={greenMode}
                  myGreenText={checkTextGreen}
                />
                <Alert alert={alert} />
                <About mode={mode}/>
              </>
            }
          ></Route>
          <Route
            exact path="/"
            element={
              <>
                <Navbar
                  title="TextUtils"
                  aboutText="About"
                  mode={mode}
                  toggleMode={toggleMode}
                  myText={textMode}
                  stateMent={checkText}
                  greenMode={greenMode}
                  myGreenText={checkTextGreen}
                />
                <Alert alert={alert} />
                <div className="container my-3">
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter the text to analyse"
                    myText={textMode}
                    btnMode={btnMode}
                  />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        myText={textMode}
        stateMent={checkText}
        greenMode={greenMode}
        myGreenText={checkTextGreen}
      /> */}
      {/* //* if you don't pass anything to your props the default props will be triggered from the component Navbar */}
      {/* <Navbar/> */}
      {/* <Alert alert={alert} /> */}
      {/* <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse"
          myText={textMode}
          btnMode={btnMode}
        />
      </div> */}
      {/* <About /> */}
    </>
  );
}

export default App;
