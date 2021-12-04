
import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div >

      <Router>
        <Routes>
          {/* <Route exact path="/">
            <Home></Home>
          </Route> */}

          <Route index element={<Home />}> </Route>

          <Route path="about" element={<About />}></Route>

          <Route path="projects" element={<Projects/>}></Route>

          <Route path="services" element={< Services/>}></Route>

          <Route path="contact" element={<Contact />}></Route>

          <Route path="blogs" element={<Blogs />}></Route>

       </Routes>

      </Router>


    </div>
  );
}

export default App;
