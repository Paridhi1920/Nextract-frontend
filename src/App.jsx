import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Summarizer from './components/Summarizer';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  if (!authChecked) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />      
        <Route path="/summarize" element={user ? <Summarizer /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
