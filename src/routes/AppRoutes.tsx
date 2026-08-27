import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import DigitalCard from '../pages/DigitalCard';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Standalone Digital Business Card Pages (No Navbar / No Footer) */}
        <Route path="/card" element={<DigitalCard />} />
        <Route path="/vcard" element={<DigitalCard />} />
        <Route path="/tarjeta" element={<DigitalCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
