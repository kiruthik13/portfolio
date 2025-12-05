import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Internships from './pages/Internships';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Achievements />
        <Certificates />
        <Internships />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
