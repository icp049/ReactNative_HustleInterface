import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic here, then set isLoggedIn to true if successful
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <MainScreen />;
  } else {
    return <LoginScreen onLogin={handleLogin} />;
  }
};

export default App;
