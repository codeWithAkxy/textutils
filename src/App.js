import { useState } from "react";
// import {
//   BrowserRouter as Router, Switch, Route
// } from "react-router-dom";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })

    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#091434'
      showAlert('success', 'Dark Mode Enabled.')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'Dark Mode Disabled.')
    }

  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtilsApp" aboutText="About Me" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          {/* <Switch> */}
            {/* <Route exact path="/about">
              <About heading="About Us" />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading='Enter The Text To Analyze' mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
