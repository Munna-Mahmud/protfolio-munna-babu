import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import ScaleLoader from "react-spinners/ScaleLoader";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {
        loading ?
          <ScaleLoader
            color={"#000000"}
            loading={loading}
            size={30} />
          :


          <Router>
            <Routes>

            <Route path="/" element={<Home />}> </Route>

              <Route index element={<Home />}> </Route>

              <Route path="about" element={<About />}></Route>

              <Route path="projects" element={<Projects />}></Route>

              <Route path="services" element={< Services />}></Route>

              <Route path="contact" element={<Contact />}></Route>

              <Route path="blogs" element={<Blogs />}></Route>

            </Routes>
          </Router>
      }

    </div>
  );
}

export default App;
