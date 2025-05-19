import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Nextract</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Upload your documents (PDF, PPT, DOCX) and get summarized content in seconds!
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
            Login
          </Link>
          <Link to="/signup" className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-md">
            Sign Up
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
