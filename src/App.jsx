import { 
  Route, 
  BrowserRouter as Router, 
  Routes
} from 'react-router-dom';

import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'

import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from "./pages/NotFoundPage";
import Footer from './components/Footer';
import ServicePage from './pages/ServicesPage';

export default function App() {
  return(
        <Router>
          {/* <marquee>Hi</marquee> */}

          <MainLayout />

          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicePage />} />

              <Route path="*" element={<NotFoundPage />}/>
          </Routes>

          <Analytics />
          <SpeedInsights />

          <Footer />
        </Router> 
  )
}