import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const CreatePengalaman = () => {
  const [title, setTitle] = useState('');
  const [description, setDeskripsi] = useState('');
  const [image_url, setImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mengelola status sidebar
  const navigate = useNavigate();
    const token = localStorage.getItem("token"); // Mengambil token dari localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    Array.from(image_url).forEach((image) => {
      formData.append('image_urls', image); // Mengirim semua file image
    });

    try {
      await axios.post('https://api.tegararsyadani.my.id/api/admin/pengalaman/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`, // Menggunakan token untuk otentikasi
        },
      });
      navigate('/pengalaman');
    } catch (error) {
      console.error('Error creating pengalaman', error);
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
        <h2 className="text-2xl font-bold mb-4">Tambah Pengalaman</h2>
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
              onChange={(e) => setDeskripsi(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
            type="file"
            multiple
            onChange={(e) => setImage(e.target.files)} // Mendukung multiple file
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

export default CreatePengalaman;
