import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Icon for edit and delete
import { FiPlus } from 'react-icons/fi'; // Icon for adding new portfolio

const PortfolioList = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [notification, setNotification] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mengontrol sidebar

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await axios.get('https://apiportofolio.tegararsyadani.my.id/api/porto/postsPorto');
      setPortfolios(response.data);
    } catch (error) {
      console.error('Error fetching portfolios', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apiportofolio.tegararsyadani.my.id/api/porto/postsPorto/${id}`);
      setNotification("Portfolio successfully deleted!");
      setTimeout(() => setNotification(null), 3000); // Auto-dismiss notification after 3 seconds
      fetchPortfolios(); // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting portfolio', error);
    }
  };

  // Get current portfolios
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPortfolios = portfolios.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex-1 flex flex-col`}
      >
        <div className="flex-1 p-6 transition-all duration-300 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Daftar Portfolio</h2>
          
          {/* Notification */}
          {notification && (
            <div className="bg-green-500 text-white p-2 rounded mb-4">
              {notification}
            </div>
          )}

          <Link to="/portfolio/create" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded inline-flex items-center mb-6">
            <FiPlus className="mr-2" /> Tambah Post Portfolio
          </Link>

          <table className="min-w-full bg-white border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border py-2 px-4 text-left">Title</th>
                <th className="border py-2 px-4 text-left">Image</th>
                <th className="border py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPortfolios.map((portfolio) => (
                <tr key={portfolio.id} className="hover:bg-gray-100 transition-all">
                  <td className="border px-4 py-2">{portfolio.title}</td>
                  <td className="border px-4 py-2">
                    <img 
                      src={`https://apiportofolio.tegararsyadani.my.id${portfolio.imageUrl}`} 
                      alt={portfolio.title} 
                      className="h-16 w-16 object-cover rounded-md shadow-sm"
                    />
                  </td>
                  <td className="border px-4 py-2 flex items-center space-x-2">
                    <Link to={`/portfolio/edit/${portfolio.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                      <AiFillEdit className="mr-1" /> Edit
                    </Link>
                    <button 
                      onClick={() => handleDelete(portfolio.id)} 
                      className="text-red-600 hover:text-red-800 flex items-center"
                    >
                      <AiFillDelete className="mr-1" /> Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={portfolios.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <footer className="p-4 bg-white shadow-md text-center">
          <p className="text-gray-600">© 2024 Your Company. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded border ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white border-gray-300 hover:bg-gray-200'}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PortfolioList;
