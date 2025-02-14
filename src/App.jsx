import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Membership from "./Membership";
import Projects from "./Projects";
import FAQ from "./FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/membership" element={<Membership />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
