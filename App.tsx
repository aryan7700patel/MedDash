
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationEnd = () => {
    setShowSplash(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex items-center justify-center transition-colors duration-500">
      {showSplash ? (
        <SplashScreen onAnimationEnd={handleAnimationEnd} />
      ) : (
        <LoginScreen />
      )}
    </div>
  );
};

export default App;
