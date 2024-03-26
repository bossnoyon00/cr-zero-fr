import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfUse from './components/TermsOfUse';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
        <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path='termsofuse' element={<TermsOfUse />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;