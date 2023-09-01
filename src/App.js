/* eslint-disable */
import "./App.css";
import { Navbar } from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      feedSetAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#29492e";
      feedSetAlert("Dark mode has been enabled", "success");
    }
  };

  const feedSetAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Dr.Text"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact path="/"
            element={
              <div className="container my-4">
                <TextForm mode={mode} feedSetAlert={feedSetAlert} />
              </div>
            }
          />
          <Route
            exact path="/about"
            element={
              <div className="container my-4">
                <AboutUs />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
