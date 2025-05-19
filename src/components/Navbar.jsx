import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <nav className="bg-[#1e293b] text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">Nextract</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-blue-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400">About</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link to="/login" className="hover:text-blue-400">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-blue-400">Sign Up</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/summarize" className="hover:text-blue-400">Summarize</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
