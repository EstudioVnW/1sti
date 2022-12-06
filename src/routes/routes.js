// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Onboarding
import Home from '../pages/Home';
import Services from '../pages/Services';
import DigitalStrategy from '../pages/DigitalStrategy';
import DigitalPlatforms from '../pages/DigitalPlatforms';
import DeepTechInnovation from '../pages/DeepTechInnovation';
import DigitalBackbones from '../pages/DigitalBackbones';
import DeepAnalytics from '../pages/DeepAnalytics';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';

const NavigateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          path='/servico'
          element={<Services />}
        />
        <Route
          path='/estrategia-digital'
          element={<DigitalStrategy />}
        />
        <Route
          path='/backbones-digitais'
          element={<DigitalBackbones />}
        />
        <Route
          path='/plataformas-digitais'
          element={<DigitalPlatforms />}
        />
        <Route
          path='/inovacao-deep-tech'
          element={<DeepTechInnovation />}
        />
        <Route
          path='/deep-analytics'
          element={<DeepAnalytics />}
        />
        <Route
          path='/contato'
          element={<Contact />}
        />
        
        <Route
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
    </Router>
  )
};


export default NavigateRoutes;
