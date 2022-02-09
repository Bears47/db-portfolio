// import logo from './logo.svg';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
//import Testimonials from "./components/Testimonials";

import "./App.css";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Profile />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
}
