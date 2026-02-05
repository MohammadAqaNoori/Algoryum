import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import MissionPage from './pages/MissionPage'
import ProcessPage from './pages/ProcessPage'
import ServicePage from './pages/ServicePage'
import ConnectPage from './pages/ConnectPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </Router>
  )
}

export default App
