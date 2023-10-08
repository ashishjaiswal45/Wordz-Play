import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      document.title = "Wordz Play - Dark Mode"
      showAlert("Dark Mode has been", "success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      document.title = "Wordz Play - Light Mode"
      showAlert("Light Mode has been", "success")
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
    <NavBar title="Wordz Play" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <br />
    <div className="container my-3">
	    {/* <Routes> */}
		  {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
	    {/* </Routes> */}
      {/* <Routes> */}
        <TextForm showAlert={showAlert} heading="Try Wordz Play - Text Converter, Word counter, Character counter"mode={mode} />
        {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Wordz Play - Text Converter, Word counter, Character counter"mode={mode} />}></Route> */}
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
