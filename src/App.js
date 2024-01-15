
//import About from './About';
import About from './About';
import Alert from './Alert';
import './App.css';
import Textform from './Textform';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); 
  const[alert, setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
  },1500);
  }
  const toggleMode = () =>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  /*{<div className="p-2 mb-0 bg-success bg-gradient  text-black">}*/
      <>
      <Router>
  <Navbar  title="TextUtilsApp" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3 ">
    <Routes>
      <Route path="/About" element={<About mode={mode}/>}/>
      <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below"  mode={mode}/>}/>
    </Routes>
  </div>
  </Router>
  </>
  /*</div>*/
  );
}

export default App;
