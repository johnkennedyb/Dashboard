import { useState, useRef } from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './Home';
import Login from './Login';
import './App.css';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // Define refs for sections in the Home component
  const intensityRef = useRef(null);
  const likelyhoodRef = useRef(null);
  const relevanceRef = useRef(null);
  const yearRef = useRef(null);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <div className="app-container">
      {loggedIn ? (
        <div className="grid-container">
          <Header OpenSidebar={OpenSidebar} onLogout={handleLogout} />
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
            intensityRef={intensityRef}
            likelyhoodRef={likelyhoodRef}
            relevanceRef={relevanceRef}
            yearRef={yearRef}
          />
          <Home
            user={user}
            onLogout={handleLogout}
            intensityRef={intensityRef}
            likelyhoodRef={likelyhoodRef}
            relevanceRef={relevanceRef}
            yearRef={yearRef}
          />
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
