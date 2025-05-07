import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/upload');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto bg-gray-800 text-white rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} className="w-full mb-2 p-2" />
      <input type="password" placeholder="Password" value={password}
        onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2" />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Login</button>
    </form>
  );
}

export default Login;
