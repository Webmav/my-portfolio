import { 
  Route, 
  BrowserRouter as Router, 
  Routes
} from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from "./pages/NotFoundPage";
import Footer from './components/Footer';

export default function App() {
  return(
        <Router>
          {/* <marquee>Hi</marquee> */}

          <MainLayout />

          <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/projects" element={<ProjectPage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/contact" element={<ContactPage />}/>

              <Route path="*" element={<NotFoundPage />}/>
          </Routes>

          <Footer />

          <SpeedInsights />
          <Analytics />
        </Router> 
  )
}


//Project slider