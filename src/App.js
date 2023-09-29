// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {BrowserRouter as Router, Switch,Routes ,Route, Link} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode= ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Has Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Enabled","success");
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(() =>setAlert(null), 1500)
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
    </div>
    </Router>
    {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch></Switch>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    <About/>
    </div> */}
    </>
  );
}

export default App;
