// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({ msg: message });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "hsl(240deg 73% 13%)";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled.");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark Mode Disabled.");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutus="About"
          mode={mode}
          toggleSwitch={toggleSwitch}
        />
        <Alert alert={alert} />
        {/* <TextArea head="Enter Your Text Here" mode={mode} showAlert={showAlert}/> */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextArea head="Enter Your Text Here" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
