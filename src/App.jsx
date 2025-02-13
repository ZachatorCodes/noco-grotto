import { Routes, Route } from 'react-router'
import Home from './Home'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
