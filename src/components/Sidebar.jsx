import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineProject, AiOutlineUser, AiOutlineSolution, AiOutlineFileText, AiOutlineTrophy } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const menuItems = [
    {
      path: '/dashboard',
      icon: AiOutlineHome,
      label: 'Beranda'
    },
    {
      path: '/portfolio',
      icon: AiOutlineProject,
      label: 'Post Portfolio'
    },
    {
      path: '/about',
      icon: AiOutlineUser,
      label: 'Post About'
    },
    {
      path: '/pengalaman',
      icon: AiOutlineSolution,
      label: 'Post Pengalaman'
    },
    {
      path: '/cv',
      icon: AiOutlineFileText,
      label: 'Post CV'
    },
    {
      path: '/sertifikat',
      icon: AiOutlineTrophy,
      label: 'Post Sertifikat'
    },
    {
      path: '/article',
      icon: AiOutlineFileText,
      label: 'Post Article'
    },

  ];

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white p-3 fixed top-4 left-4 z-50 rounded-lg shadow-lg transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white w-64 fixed top-0 left-0 h-full z-40 transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-center py-6 px-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200 group"
                    onClick={() => {
                      // Close sidebar on mobile after navigation
                      if (window.innerWidth < 1024) {
                        setIsOpen(false);
                      }
                    }}
                  >
                    <IconComponent className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 active:bg-red-800 px-4 py-3 text-white rounded-lg transition-colors duration-200 font-medium shadow-md"
          >
            <BiLogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
