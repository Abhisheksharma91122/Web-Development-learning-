import Home from "./pages/Home"
import { Routes, Route, Navigate } from "react-router-dom"
import Redirect from "./pages/Redirect"
import ShowAnalytics from "./pages/ShowAnalytics"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortened" element={<Redirect />} />
        <Route path="/analytics" element={<ShowAnalytics />} />
      </Routes>
    </div>
  )
}

export default App
