import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import AuthPage from './pages/AuthPage'
import './App.css'
import './styles/animations.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
