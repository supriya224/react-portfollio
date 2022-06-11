import React from 'react';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Services from './component/services/Services';
import Profile from './component/profile/Profile';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';


import './App.css';


function App() {
  return (
    <div className="App">
       <Header />
       <Nav />
       <About/>
       <Experience/>
       < Services />
       <Profile />
       < Testimonial />
       <Contact />
       < Footer />
    </div>
  );
}

export default App;
