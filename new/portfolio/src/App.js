import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Career from './components/Career';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-white">
      <Intro/>
      <About/>
      <Projects/>
      <Career/>
      <Footer/>
    </div>
  );
}

export default App;
