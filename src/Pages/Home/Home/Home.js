import React from 'react';
import About from '../../About/About';
import Blogs from '../../Blogs/Blogs';
import Footer from '../../Footer/Footer';
import Projects from '../../Projects/Projects';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
// import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <About></About>
         <Services></Services>
         <Projects></Projects>
         <Blogs></Blogs>
         <Footer></Footer>
        </div>
    );
};

export default Home;