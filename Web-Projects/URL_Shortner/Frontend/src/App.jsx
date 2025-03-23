import Home from "./pages/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import Redirect from "./pages/Redirect"
import Count from "./pages/Count"
import Analytics from "./pages/analytics"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortened" element={<Redirect />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/total-count" element={<Count />} />
      </Routes>
    </div>
  )
}

export default App
