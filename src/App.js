
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const onbtn = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = " Siplo - Dark mode"

    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("White Mode Has been Enabled", "success  ")
      document.title = "Siplo - Light Mode "
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="siplo" about="Siplo About" mode={Mode} onbtn={onbtn} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/"> */}
              <Textarea showAlert={showAlert} heading="Enter Your Text:" mode={Mode} />
            {/* </Route>

          </Switch> */}

        </div>
      {/* </Router> */}


    </>
  );
}

export default App;
