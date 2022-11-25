// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Onboarding
import Home from '../pages/Home';
import Services from '../pages/Services';

const NavigateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/servico'
          element={<Services />}
        />
           
      </Routes>
    </Router>
  )
};


export default NavigateRoutes;
