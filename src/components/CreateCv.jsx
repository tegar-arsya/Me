import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const CreateCv = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token"); // Mengambil token dari localStorage


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('https://api.tegararsyadani.my.id/api/admin/cv/', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`, // Menggunakan token untuk otentikasi
          },
        }
      );
      navigate('/cv');
    } catch (error) {
      console.error('Error creating CV', error);
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
        <h2 className="text-2xl font-bold mb-4">Tambah Cv</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">file</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
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

export default CreateCv;
