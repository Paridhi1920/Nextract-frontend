// src/pages/About.jsx
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-4 bg-blue-950">
        <div className="text-xl font-bold">Nextract</div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Nextract</h2>
        <p className="text-lg text-gray-300">
          Nextract is an AI-powered document summarizer that helps users quickly extract meaningful content from large documents.
        </p>
      </div>
    </div>
  );
};

export default About;
