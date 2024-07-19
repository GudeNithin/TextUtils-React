import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('New Mode Enabled!!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('New Mode Enabled!!', 'success');
    }
  };

  return (
    <>
      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="AboutProj" />
        <Alerts alert={alert} />
        <div className="container mt-3">
          <Routes>
            <Route
              path="/"
              element={<Text showAlert={showAlert} heading1="Enter the text to Analyze Below" heading2="Count words and Characters" mode={mode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router> */}
      <div className="container mt-3">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="AboutProj" />
        <Alerts alert={alert} />
        <Text showAlert={showAlert} heading1="Enter the text to Analyze Below" heading2="Count words and Characters" mode={mode} />
      </div>
    </>
  );
}

export default App;
