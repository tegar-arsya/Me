import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const CreatePortfolio = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState(null);
  const [site, setSite] = useState('');
  const [github, setGithub] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mengelola status sidebar
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', imageUrl);
    formData.append('site', site);
    formData.append('github', github);

    try {
      await axios.post('https://apiportofolio.tegararsyadani.my.id/api/porto/postsPorto', formData);
      navigate('/Portfolio');
    } catch (error) {
      console.error('Error creating portfolio', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar dengan prop isOpen */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Konten utama yang menyesuaikan jarak sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex-1 p-4 bg-white shadow-md`}
      >
        <h2 className="text-2xl font-bold mb-4">Tambah Portfolio</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Website URL</label>
            <input
              type="text"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">GitHub URL</label>
            <input
              type="text"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePortfolio;
