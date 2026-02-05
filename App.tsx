
import React from 'react';
import Navbar from './components/Navbar';

import { LanguageProvider } from './components/LanguageContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';<div className=""></div>
import BaseRoute from './routes/BaseRoute';
import ProjectRoute from './routes/ProjectRoute';
import CareersPage from './routes/CareersPage';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<BaseRoute />} />
          <Route path="/our-projects" element={<ProjectRoute />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
    </BrowserRouter>     
    </LanguageProvider>
  );
};

export default App;
