import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import API from '../pages/API';
import Services from '../pages/Services';
import React from 'react';

function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/api" element={<API />} />
         <Route path="/services" element={<Services />} />
      </Routes>
   );
}

export default AppRoutes;