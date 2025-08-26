import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorBoundary from "./components/ErrorBoundary"
import Facts from "./pages/Facts"

export default function App() {
  return (
    <div>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facts" element={<Facts />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}
