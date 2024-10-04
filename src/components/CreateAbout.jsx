import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const CreateAbout = () => {
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState(null);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', imageUrl);

    try {
      await axios.post('https://apiportofolio.tegararsyadani.my.id/api/about/postsAbout', formData);
      navigate('/About');
    } catch (error) {
      console.error('Error creating About', error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
       <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex-1 p-4 bg-white shadow-md`}
      >
        <h2 className="text-2xl font-bold mb-4">Tambah About</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAbout;
