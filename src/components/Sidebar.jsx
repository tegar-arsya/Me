import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineProject, AiOutlineSetting } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-800 text-white p-3 fixed top-4 left-4 z-50 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>
      <div
        className={`bg-gray-900 text-white w-64 fixed top-0 left-0 h-full z-40 transition-transform duration-300 shadow-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center mt-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>
        <ul className="mt-10">
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="flex items-center p-3 hover:bg-gray-700 rounded transition-colors duration-200"
            >
              <AiOutlineHome className="mr-3 text-xl" /> Beranda
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/portfolio"
              className="flex items-center p-3 hover:bg-gray-700 rounded transition-colors duration-200"
            >
              <AiOutlineProject className="mr-3 text-xl" /> Post Portfolio
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/about"
              className="flex items-center p-3 hover:bg-gray-700 rounded transition-colors duration-200"
            >
              <AiOutlineProject className="mr-3 text-xl" /> Post About
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/settings"
              className="flex items-center p-3 hover:bg-gray-700 rounded transition-colors duration-200"
            >
              <AiOutlineSetting className="mr-3 text-xl" /> Pengaturan
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-8 w-full px-4">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 p-3 text-white rounded transition-colors duration-200"
          >
            <BiLogOut className="mr-3 text-xl" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
