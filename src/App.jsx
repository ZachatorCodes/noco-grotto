import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Membership from "./Membership";
import Projects from "./Projects";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/membership" element={<Membership />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
