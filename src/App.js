import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualifications/Qualification';
import Testimonial from './components/testimonials/Testimonial';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
     <Skills />
     <Services />
     <Qualification />
     <Testimonial />
     <Contact />
    </div>
  );
}

export default App;
