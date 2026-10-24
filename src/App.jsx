// import Navbar from "./common/Navbar"
import About from "./components/About"
import Certificate from "./components/Certificate"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import HomeContainer from "./components/HomeContainer"
// import Home from "./components/Home"


function App() {


  return (
    <div className="scroll-smooth">
    {/* <Navbar />
    <Home /> */}
    <HomeContainer />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Certificate />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
