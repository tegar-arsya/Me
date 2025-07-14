import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';

const EditPengalaman = () => {
  const { id } = useParams();
  const [pengalaman, setPengalaman] = useState({
    title: '',
    description: '',
    image_url: ''
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const token = localStorage.getItem("token"); // Mengambil token dari localStorage
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Component mounted. Fetching pengalaman with id:', id);
    fetchPengalaman();
  }, [id]);

  const fetchPengalaman = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching pengalaman data...');
      const response = await axios.get(`https://api.tegararsyadani.my.id/api/admin/pengalaman/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Menggunakan token untuk otentikasi
          'Content-Type': 'multipart/form-data',
        }
      });
      console.log('Received response:', response);
      if (response.data.data) {
        console.log('Setting pengalaman data:', response.data.data);
        setPengalaman(response.data.data);
      } else {
        console.error('No data received from server');
        setError('No data received from server');
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while fetching the portfolio');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPengalaman(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('title', pengalaman.title);
    formData.append('deskripsi', pengalaman.deskripsi);
    if (image) {
      Array.from(image).forEach((img) => {
        formData.append('images', img); // Mengirim semua file image
      });
    }

    try {
      console.log('Updating portfolio...');
      const response = await axios.put(`https://api.tegararsyadani.my.id/api/admin/pengalaman/${id}`, formData);
      console.log('Update response:', response);
      navigate('/pengalaman');
    } catch (error) {
      console.error('Error updating pengalaman:', error);
      setError(error.response?.data?.message || error.message || 'An error occurred while updating the portfolio');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex h-screen bg-gray-100">
       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <div className="flex-1 p-4 transition-all duration-300 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/portfolio')} className="mt-4 bg-blue-500 text-white p-2 rounded">
            Back to pengalaman List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
     <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
     <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } flex-1 p-4 bg-white shadow-md`}
      >
        <h2 className="text-2xl font-bold mb-4">Edit pengalaman</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={pengalaman.title}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="deskripsi"
              value={pengalaman.deskripsi}
              onChange={handleChange}
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
            {pengalaman.imageUrl && pengalaman.imageUrl.split(',').map((img, index) => (
              <img key={index} src={`https://apiportofolio.tegararsyadani.my.id${img}`} alt="Current" className="mt-2 h-20 w-20 object-cover" />
            ))}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPengalaman;
