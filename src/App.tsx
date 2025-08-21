import { ThemeProvider } from './ThemeProvider';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';
import './App.css';
import type { JSX } from 'react';


function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider>
        <ScrollToTop />
        <Header />
        <Home/>
        <About/>
        <Skills />
       
        <Projects/>
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
