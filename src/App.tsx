import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'
import CertificationsPage from './pages/CertificationsPage'
import ProjectsPage from './pages/ProjectsPage'
import DownloadsPage from './pages/DownloadsPage'
import LocationPage from './pages/LocationPage'
import EnquiryPanel from './components/EnquiryPanel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/enquiry" element={<ContactPage />} />
      </Routes>
      <EnquiryPanel />
    </BrowserRouter>
  )
}

export default App
