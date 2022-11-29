// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Onboarding
import Home from '../pages/Home';
import Services from '../pages/Services';
import DigitalStrategy from '../pages/DigitalStrategy';

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
          path='/*'
          element={<Home />}
        />
      </Routes>
    </Router>
  )
};


export default NavigateRoutes;
