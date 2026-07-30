import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Background from "./components/Background";
import MouseGlow from "./components/MouseGlow";
import Contact from "./components/Contact";

function App() {

  return (

    <>
      <Background />
      <MouseGlow/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </>

  )

}

export default App;