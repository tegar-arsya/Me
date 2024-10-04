import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Icon for edit and delete
import { FiPlus } from 'react-icons/fi'; // Icon for adding new portfolio
const AboutList = () => {
  const [abouts, setAbouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  useEffect(() => {
    fetchAbouts();
  }, []);

  const fetchAbouts = async () => {
    try {
      const response = await axios.get('https://apiportofolio.tegararsyadani.my.id/api/about/postsAbout');
      setAbouts(response.data);
    } catch (error) {
      console.error('Error fetching Abouts', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://apiportofolio.tegararsyadani.my.id/api/about/postsAbout/${id}`);
      fetchAbouts(); // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting About', error);
    }
  };

  // Get current portfolios
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAbouts = abouts.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className="flex-1 p-4 transition-all duration-300 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-4">Daftar About</h2>
        <Link to="/about/create" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">
          Tambah Post About
        </Link>
        <table className="min-w-full bg-white mt-4">
          <thead>
            <tr>
              {/* <th className="py-2">Title</th> */}
              {/* <th className="py-2">Description</th> */}
              <th className="py-2">Image</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentAbouts.map((about) => (
              <tr key={about.id}>
                {/* <td className="border px-4 py-2">{about.title}</td> */}
                {/* <td className="border px-4 py-2">{about.description}</td> */}
                <td className="border px-4 py-2">
                  <img src={`https://apiportofolio.tegararsyadani.my.id${about.imageUrl}`} className="h-16 w-16 object-cover" />
                </td>
                <td className="border px-4 py-2 flex items-center space-x-2">
                  <Link to={`/about/edit/${about.id}`} className="text-blue-600 hover:text-blue-800 flex items-center">
                  <AiFillEdit className="mr-1" /> Edit
                  </Link>
                  <button onClick={() => handleDelete(about.id)} className="text-red-600 hover:text-red-800 flex items-center">
                  <AiFillDelete className="mr-1" /> Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={abouts.length}
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
    <nav className="mt-4">
      <ul className="flex justify-center">
        {pageNumbers.map(number => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white'}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AboutList;