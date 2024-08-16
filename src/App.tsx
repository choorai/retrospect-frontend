import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/page';
import CustomerSupportPage from './pages/customer_support/page';
import OurStoryPage from './pages/our_story/page';
import MainServicePage from './pages/main_service/page';
import ReHubTemplatesPage from './pages/re_hub_templates/page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-service" element={<MainServicePage />} />
        <Route path="/rehub-templates" element={<ReHubTemplatesPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/customer-support" element={<CustomerSupportPage />} />
      </Routes>
    </Router>
  );
};

export default App;
