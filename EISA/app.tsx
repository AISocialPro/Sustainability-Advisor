import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import EcoTips from './pages/EcoTips';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';
import OnboardingForm from './components/onboarding/OnboardingForm';
import { UserProvider, useUser } from './context/UserContext';

const AppContent = () => {
  const { isOnboarded, completeOnboarding } = useUser();

  if (!isOnboarded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <OnboardingForm onComplete={completeOnboarding} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/eco-tips" element={<EcoTips />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <AppContent />
      </Router>
    </UserProvider>
  );
}

export default App;