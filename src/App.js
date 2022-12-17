import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
function App() {
  return (
    <div className="container">
      <Heading />
      <About />
      <Services />
      <Skills />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
