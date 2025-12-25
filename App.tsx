
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Rectification from './pages/Rectification';
import Inspection from './pages/Inspection';
import Dashboard from './pages/Dashboard';
import Management from './pages/Management';
import Review from './pages/Review';
import Urgency from './pages/Urgency';
import { UserRole } from './types';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.STORE_MANAGER);

  const toggleRole = () => {
    const roles = Object.values(UserRole);
    const currentIndex = roles.indexOf(role);
    const nextIndex = (currentIndex + 1) % roles.length;
    setRole(roles[nextIndex] as UserRole);
  };

  return (
    <Router>
      <div className="min-h-screen max-w-md mx-auto bg-white shadow-lg overflow-hidden flex flex-col">
        {/* Role Switcher Floating Button (Debug/Demo Purpose) */}
        <button 
          onClick={toggleRole}
          className="fixed bottom-4 right-4 z-50 bg-primary text-white p-2 rounded-full shadow-xl text-xs"
        >
          切:{role}
        </button>

        <Routes>
          <Route path="/" element={<Home role={role} />} />
          <Route path="/rectification" element={<Rectification role={role} />} />
          <Route path="/inspection" element={<Inspection role={role} />} />
          <Route path="/dashboard" element={<Dashboard role={role} />} />
          <Route path="/management" element={<Management role={role} />} />
          <Route path="/review" element={<Review role={role} />} />
          <Route path="/urgency" element={<Urgency role={role} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
