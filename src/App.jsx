import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
