import React from 'react';
import LandingPage from './components/LandingPage';
import SignUpLoginModal from './components/SignUpLoginModal';
import PaymentSection from './components/PaymentSection';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SignUpLoginModal />
      <PaymentSection />
    </div>
  );
}

export default App;
