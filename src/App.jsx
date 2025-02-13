import { Routes } from 'react-router'
import Home from './Home'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
