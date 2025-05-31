
import { ThemeProvider } from './ThemeProvider';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

import{ Route, Routes } from 'react-router-dom';
import './App.css'
function App() {
  return (
    
      <div className="App"> 
        <ThemeProvider>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
        </ThemeProvider>
    </div>   
  );
}

export default App;
