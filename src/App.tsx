// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// About section
import About from "./components/About/About";
// Skills section
import Skills from "./components/Skills/Skills";
// Projects section
import Projects from "./components/Projects/Projects";
// Contact section
import Contact from "./components/Contact/Contact";
// Footer
import Footer from "./components/Footer/Footer";
// Scroll progress
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
// Cursor glow
import CursorGlow from "./components/CursorGlow/CursorGlow";

// Главный компонент
function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main>
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>
      {/* Footer */}
        <Footer />
      {/* Scroll progress */}
        <ScrollProgress />

      {/* Cursor glow */}
        <CursorGlow />
    </>
  );
}

export default App;