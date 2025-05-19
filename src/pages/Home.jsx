import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-950 shadow-md">
        <div className="text-xl font-bold">Nextract</div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Welcome to Nextract</h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Upload your PDFs and get instant summaries powered by AI. Secure, fast, and smart.
        </p>
        <Link
          to="/login"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-4">
        © 2025 Nextract. Built with 💙 using React & Flask.
      </footer>
    </div>
  );
};

export default Home;
